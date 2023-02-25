import React, { useEffect, useState } from 'react';
import './App.css';
import dataSource from './dataSource';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchTodo from './SearchTodo';
import NavBar from './NavBar';
import EditTodo from './EditTodo';

const App = () => {
  // constant useState variables
  const [todoList, setTodoList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [selectedTodoId, setSelectedTodoId] = useState(0);

  let refresh = false;

  // method to update list based on search results
  const updateSearchResults = (phrase) => {
    console.log("Searching for: " + phrase);
    setSearchPhrase(phrase);
  };

  // get list of todos
  useEffect(() => {
    loadTodo();
  }, [refresh]);

  // send get request to API
  const loadTodo = async () => {
    const response = await dataSource.get("/todos");

    setTodoList(response.data);
  };

  // return todos matching search term
  const renderedList = todoList.filter((todo) => {
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
    console.log('Update Single Todo = ', id);
    console.log('Update Single Todo = ', navigate);
    var indexNumber = 0;
    for (var i = 0; i < todoList.length; ++i) {
      if (todoList[i].id === id) indexNumber = i;
    }
    setSelectedTodoId(indexNumber);
    let path = uri + indexNumber;
    console.log('path' + path);
    navigate(path);
  }

  const onComplete = async (id) => {
    // Get todo
    let response = await dataSource.get('/todos/' + id);
    let todo = response.data;

    // Set compeleted
    todo.isCompleted = true;

    // Update todo
    let updateResponse = await dataSource.put('/todos', todo);

    // Refresh list
    loadTodo();
  }

  const onDelete = async (id) => {

    console.log('Id to delete: ' + id);

    // Delete todo
    let response = await dataSource.delete('/todos/' + id);

    // Refresh list
    loadTodo();
  }

  // navigate to home after editing a model
  const onEditTodo = (navigate) => {
    loadTodo();
    navigate("/");
  }

  console.log("renderedList", renderedList);

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
