import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";
import logger from './services/LogglyService';

const EditTodo = (props) => {
  // todo default model
  let todo = {
    title: '',
    description: '',
    timestamp: 0,
    isCompleted: false,
  };

  // set if creating or editing
  let newTodoCreation = true;

  // determine if todo prop was sent through
  if (props.todo) {
    todo = props.todo;
    newTodoCreation = false;
  }

  // const variables from model
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [timestamp, setTimestamp] = useState(todo.timestamp);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const navigate = useNavigate();

  // method to submit form and object
  const handleFormSubmit = (event) => {

    // Entered log message
    logger.info('EditTodo', 'Entered handleFormSubmit()');

    event.preventDefault();

    const editedTodo = {
      id: todo.id,
      title: title,
      description: description,
      timestamp: timestamp,
      isCompleted: isCompleted
    };

    logger.debug('EditTodo', `Edited Todo: ${JSON.stringify(editedTodo)}`);
    saveTodo(editedTodo);

    // Exit log message
    logger.info('EditTodo', 'Exited handleFormSubmit()');
  };


  // send post or put based on newTodoCreation
  const saveTodo = async (todo) => {

    // Enter log message
    logger.info('EditTodo', 'Entered saveTodo()');
    
    // Set todo timestamp
    todo.timestamp = new Date().getTime();

    // Default is completed to false
    if (todo.isCompleted === undefined) todo.isCompleted = false;

    logger.debug('EditTodo', todo);

    let response;
    if (newTodoCreation)
      response = await dataSource.post('/todos', todo);
    else
      response = await dataSource.put('/todos', todo);
    logger.debug('EditTodo', response);
    logger.debug('EditTodo', response.data);
    props.onEditTodo(navigate);

    // Exit log message
    logger.info('EditTodo', 'Exited saveTodo()');
  };

  // navigate to home
  const handleCancel = () => {
    navigate("/");
  };

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };
  const updateDescription = (event) => {
    setDescription(event.target.value);
  };
  const updateIsCompleted = (event) => {
    setIsCompleted(event.target.checked);
  };

  return (
    <div className="container center">
      <form onSubmit={handleFormSubmit}>
        <h1>{newTodoCreation ? "Create New" : "Edit"} Todo</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Enter Title" value={title} onChange={updateTitle} />
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" placeholder="Enter Description" value={description} onChange={updateDescription} />
          <input type="checkbox" className="form-check-input" id="isCompleted" defaultChecked={isCompleted} onChange={updateIsCompleted} />
          <label className="form-check-label" htmlFor="isCompleted">Is Completed?</label>
        </div>
        <div align="center">
          <br/>
          <button type="button" className="btn btn-light button" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="btn btn-primary button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
