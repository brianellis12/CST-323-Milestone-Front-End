import React from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const OneGundam = (props) => {
  // setup navigation for page
  const navigate = useNavigate();

  // view edit information of model
  const viewCard = (event, uri) => {
    let path = uri + event;
    navigate(path);
  };

  // send delete request to API and refresh page
  const deleteCard = async (gundamId) => {
    let response;
    response = await dataSource.delete('/models/' + gundamId);
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
        <h2>Model Details for "{props.gundam.modelName}"</h2>
        <div className="row">
          <div className="col col-sm-3">
            <div className="card">
              <img
                src={props.gundam.image}
                className="card-img-top"
                alt={props.gundam.modelName}
              />
              <div className="card-body">
                <h5 className="card-title">{props.gundam.modelName}</h5>
                <p className="card-text">{props.gundam.grade}</p>
                <button onClick={() => viewCard(props.modelId, '/edit/')} className="btn btn-primary button">
                  Edit
                </button>
                <button onClick={() => deleteCard(props.gundam.modelId)} className="btn btn-secondary button">
                  Delete
                </button>
                <button type="button" className="btn btn-light button" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
          <div className="col col-sm-9">
            <div className="card">
              <p className="card-text">Origin: {props.gundam.origin}</p>
            </div>
            <div className="card">
              <p className="card-text">Purchased On: {props.gundam.purchaseDate.substring(0,10)}</p>
              <p className="card-text">Price: {props.gundam.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneGundam;