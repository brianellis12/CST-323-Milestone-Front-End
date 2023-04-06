import React, { useEffect, useState } from 'react';
import './App.css';
import dataSource from './dataSource';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchTodo from './SearchTodo';
import NavBar from './NavBar';
import EditTodo from './EditTodo';
import logger from './services/LogglyService';
import { render } from '@testing-library/react';

const App = () => {

  logger.info('App', 'App started');

  // constant useState variables
  const [todoList, setTodoList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [selectedTodoId, setSelectedTodoId] = useState(0);

  let refresh = false;

  // method to update list based on search results
  const updateSearchResults = (phrase) => {

    // Enter log message
    logger.info('App', 'Entered updateSearchResults()');

    logger.info('App', `Searching for:  + ${phrase}`);
    setSearchPhrase(phrase);

    // Exit log message
    logger.info('App', 'Exited updateSearchResults()');
  };

  // get list of todos
  useEffect(() => {
    logger.info('App', 'Entered useEffect()');
    loadTodo();
    logger.info('App', 'Exited useEffect()');
  }, [refresh]);

  // send get request to API
  const loadTodo = async () => {
    logger.info('App', 'Entered loadTodo()');
    const response = await dataSource.get("/todos");
    setTodoList(response.data);
    logger.info('App', 'Exited loadTodo()');
  };

  // return todos matching search term
  const renderedList = todoList.filter((todo) => {
    logger.info('App', 'Entered renderedList()');
    if (
      todo.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      searchPhrase === ""
    ) {
      return true;
    }
    return false;
  });

  // pull data from a single todo
  const updateSingleTodo = (id, navigate, uri) => {

    logger.info('App', 'Entered updateSingleTodo()');

    logger.info('App', `Todo Id=${id}`);
    var indexNumber = 0;
    for (var i = 0; i < todoList.length; ++i) {
      if (todoList[i].id === id) indexNumber = i;
    }
    setSelectedTodoId(indexNumber);
    let path = uri + indexNumber;
    logger.info('App', `Path: ${path}`);
    navigate(path);

    logger.info('App', 'Exited updateSingleTodo()');
  }

  const onComplete = async (id) => {

    // Entered log message
    logger.info('App', 'Entered onComplete()');

    // Get todo
    let response = await dataSource.get('/todos/' + id);
    let todo = response.data;

    // Set compeleted
    todo.isCompleted = true;

    // Update todo
    let updateResponse = await dataSource.put('/todos', todo);

    // Refresh list
    loadTodo();

    // Exit log message
    logger.info('App', 'Exited onComplete()');
  }

  const onDelete = async (id) => {

    // Enter log message
    logger.info('App', 'Entered onDelete()');

    logger.info('App', `Id to delete:  + ${id}`);

    // Delete todo
    let response = await dataSource.delete('/todos/' + id);

    // Refresh list
    loadTodo();

    // Exit log message
    logger.info('App', 'Exited onDelete()');
  }

  // navigate to home after editing a model
  const onEditTodo = (navigate) => {

    // Enter log message
    logger.info('App', 'Entered onEditTodo()');

    loadTodo();
    navigate("/");

    // Exit log message
    logger.info('App', 'Exited onEditTodo()');
  }

  logger.info('App', `Rendered List: ${renderedList}`);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<SearchTodo updateSearchResults={updateSearchResults} todoList={renderedList} updateSingleTodo={updateSingleTodo} onComplete={onComplete} onDelete={onDelete} />} />
          <Route exact path="/new" element={<EditTodo onEditTodo={onEditTodo} />} />
          <Route exact path="/edit/:id" element={<EditTodo onEditTodo={onEditTodo} todo={todoList[selectedTodoId]} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
