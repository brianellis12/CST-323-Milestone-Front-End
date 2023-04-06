import React from "react";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import logger from "./services/LogglyService";

const TodoList = (props) => {
  // handle click event for selection
  const handleSelectionOne = (todoId, uri) => {
    logger.info("TodoList", `Entered handleSelectionOne() for ID of ${todoId}`);
    props.onClick(todoId, navigator, uri);
    logger.info("TodoList", "Exited handleSelectionOne()");
  };

  const handleComplete = (todoId) => {
    logger.info("TodoList", `Entered handleComplete() for ID of ${todoId}`);
    props.onComplete(todoId);
    logger.info("TodoList", "Exited handleComplete()");
  };

  const handleDelete = (todoId) => {
    logger.info("TodoList", `Entered handleDelete() for ID of ${todoId}`);
    props.onDelete(todoId);
    logger.info("TodoList", "Exited handleDelete()");
  };

  console.log("props todoList", props);

  // setup navigation
  const navigator = useNavigate();

  // create object list through mapping properties
  // sort by completion status
  const todoModels = props.todoList
    .sort((a, b) => a.isCompleted - b.isCompleted)
    .map((todo) => {
      return (
        <Card
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          timestamp={todo.timestamp}
          isCompleted={todo.isCompleted}
          onClick={handleSelectionOne}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      );
    });
  return <div className="container">{todoModels}</div>;
};

export default TodoList;
