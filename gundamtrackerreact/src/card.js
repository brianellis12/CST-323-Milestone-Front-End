import React from "react";

const Card = (props) => {
  // handle click event for selecting a card
  const viewCard = (event, uri) => {
    console.log(props);
    props.onClick(props.id, uri);
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">Date: {props.timestamp}</p>
        <br/>
        <button onClick={() => viewCard(props.id, '/show/')} className="btn btn-primary button">
          {props.buttonText}
        </button>
        <button onClick={() => viewCard(props.id, '/edit/')} className="btn btn-primary button">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Card;