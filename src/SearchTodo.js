import React from "react";
import SearchForm from "./SearchForm";
import TodoList from "./TodoList";
import logger from "./services/LogglyService";

const SearchTodo = (props) => {
  logger.info("SearchTodo", `Entered SearchTodo() with ${props}`);
  return (
    <div className="container">
      <SearchForm onSubmit={props.updateSearchResults} />
      <TodoList
        todoList={props.todoList}
        onClick={props.updateSingleTodo}
        onComplete={props.onComplete}
        onDelete={props.onDelete}
      />
    </div>
  );
};

export default SearchTodo;
