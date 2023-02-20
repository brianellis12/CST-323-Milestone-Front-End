import React from "react";

const Card = (props) => {
  // handle click event for selecting a card
  const viewCard = (event, uri) => {
    console.log(props);
    props.onClick(props.id, uri);
  }

  const completeCard = (event) => {
    console.log('Card on complete called');
    props.onComplete(props.id)
  };

  const deleteCard = (event) => {
    console.log('Card on delete called');
    props.onDelete(props.id)
  };

  const style = {
    backgroundColor: props.isCompleted ? "darkgray" : "white",
    width: "18rem"
  }

  return (
    <>
      <div className="card" style={style}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">Date: {props.timestamp}</p>
          <br />

          {/* Show buttons only if is completed is false */}
          {!props.isCompleted &&
            <>
              <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#completeModal">
                Complete
              </button>

              <button onClick={() => viewCard(props.id, '/edit/')} className="btn btn-primary button">
                Edit
              </button>
            </>
          }

          {/* Delete button always shows */}
          <button className="btn btn-outline-danger button" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
        </div>
      </div>

      {/* Modal popup */}
      <div className="modal fade" id="completeModal" aria-labelledby="completeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="completeModalLabel">Confirm Complete</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure, sir, you want to complete this task?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={() => completeCard()}>Confirm</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal popup */}
      <div className="modal fade" id="deleteModal" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Confirm Delete</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure, sir, you want to delete this task?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={() => deleteCard()}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;