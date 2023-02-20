import React from "react";
import Card from "./card";
import { useNavigate } from "react-router-dom";

const TodoList = (props) => {
  // handle click event for selection
  const handleSelectionOne = (todoId, uri) => {
    console.log("Selected ID is " + todoId);
    props.onClick(todoId, navigator, uri);
  };

  const handleComplete = (todoId) => {
    console.log('todo on complete called');
    props.onComplete(todoId);
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
        />
      );
    });
  return <div className="container">{todoModels}</div>;
};

export default TodoList;
