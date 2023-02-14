import React from "react";

const Card = (props) => {
  // handle click event for selecting a card
  const viewCard = (event, uri) => {
    console.log(props);
    props.onClick(props.modelId, uri);
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.image}
        className="card-img-top"
        alt="Gundam Model"
      />
      <div className="card-body">
        <h5 className="card-title">Name: {props.modelName}</h5>
        <p className="card-text">Grade: {props.grade}</p>
        <p className="card-text">Origin: {props.origin}</p>
        <p className="card-text">Purchased: {props.purchaseDate.substring(0, 10)}</p>
        <p className="card-text">Price: {props.price}</p>
        <br/>
        <button onClick={() => viewCard(props.albumId, '/show/')} className="btn btn-primary button">
          {props.buttonText}
        </button>
        <button onClick={() => viewCard(props.albumId, '/edit/')} className="btn btn-primary button">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Card;
