import React, { useState } from "react";
import logger from "./services/LogglyService";

const SearchForm = (props) => {
  // input text from search
  const [inputText, setInputText] = useState("");
  
  // change input text on change
  const handleChangeInput = (event) => {
    setInputText(event.target.value);
  };

  // method for submitting search form
  const handleFormSubmit = (event) => {
    logger.info("SearchForm", "Entered handleFormSubmit()");
    event.preventDefault();
    logger.info("SearchForm", `Submitting form using ${inputText}`);
    props.onSubmit(inputText);
    logger.info("SearchForm", "Exiting handleFormSubmit()");
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
