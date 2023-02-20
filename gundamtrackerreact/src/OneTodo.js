import React from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const Todo = (props) => {
  // setup navigation for page
  const navigate = useNavigate();

  // view edit information of model
  const viewCard = (event, uri) => {
    let path = uri + event;
    navigate(path);
  };

  // send delete request to API and refresh page
  const deleteCard = async (todoId) => {
    let response;
    response = await dataSource.delete('/todos/' + todoId);
    console.log(response);
    console.log(response.data);
    navigate("/");
    navigate(0);
  }

  // navigate to home page
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <br/>
      <div className="container">
        <h2>Model Details for "{props.todo.title}"</h2>
        <div className="row">
          <div className="col col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{props.todo.title}</h5>
                <p className="card-text">{props.todo.description}</p>
                <button onClick={() => viewCard(props.id, '/edit/')} className="btn btn-primary button">
                  Edit
                </button>
                <button onClick={() => deleteCard(props.todo.id)} className="btn btn-secondary button">
                  Delete
                </button>
                <button type="button" className="btn btn-light button" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
          <div className="col col-sm-9">
            <div className="card">
              <p className="card-text">Set on: {props.todo.timestamp}</p>
            </div>
            <div className="card">
              <p className="card-text">Completed?: {props.todo.isCompleted}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;