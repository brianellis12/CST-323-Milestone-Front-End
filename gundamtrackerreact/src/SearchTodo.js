import React from "react";
import SearchForm from "./SearchForm";
import TodoList from "./TodoList";

const SearchAlbum = (props) => {
  console.log("props with update single album", props);
  return (
    <div className="container">
      <SearchForm onSubmit={props.updateSearchResults} />
      <TodoList
        todoList={props.todoList}
        onClick={props.updateSingleTodo}
        onComplete={props.onComplete}
      />
    </div>
  );
};

export default SearchAlbum;
