import React from "react";
import Card from "./card";
import { useNavigate } from "react-router-dom";

const TodoList = (props) => {
  // handle click event for selection
  const handleSelectionOne = (todoId, uri) => {
    console.log("Selected ID is " + todoId);
    props.onClick(todoId, navigator, uri);
  };

  console.log("props todoList", props);

  // setup navigation
  const navigator = useNavigate();

  // create object list through mapping properties
  const todoModels = props.todoList.map((todo) => {
    return (
      <Card
      key={todo.id}
      id={todo.id}
      title={todo.title}
      description={todo.description}
      timestamp={todo.timestamp}
      isCompleted={todo.isCompleted}
      buttonText="View"
      onClick={handleSelectionOne}
    />
    );
  });
  return <div className="container">{todoModels}</div>;
};

export default TodoList;
