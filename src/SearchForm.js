import React, { useState } from "react";

const SearchForm = (props) => {
  // input text from search
  const [inputText, setInputText] = useState("");
  
  // change input text on change
  const handleChangeInput = (event) => {
    setInputText(event.target.value);
    console.log(inputText);
  };

  // method for submitting search form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(inputText);
  };

  return (
    <div>
      <br/>
      {" "}
      <form onSubmit={handleFormSubmit}>
        {" "}
        <div className="form-group">
          {" "}
          <label htmlFor="search-term">Search for:</label>{" "}
          <input
            type="text"
            className="form-control"
            placeholder="Enter search term here"
            onChange={handleChangeInput}
          />{" "}
        </div>{" "}
      </form>{" "}
      <br/>
    </div>
  );
};

export default SearchForm;
