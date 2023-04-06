import React from "react";
import logger from './services/LogglyService';

const Card = (props) => {

  let modalCompleteId = "completeModal" + props.id;
  let modalCompleteIdHash = "#" + modalCompleteId;
  let modalCompleteLabelId = "completeModalLabel" + props.id;

  let modalDeleteId = "deleteModal" + props.id;
  let modalDeleteIdHash = "#" + modalDeleteId;
  let modalDeleteLabelId = "deleteModalLabel" + props.id;

  // handle click event for selecting a card
  const viewCard = (event, uri) => {

    // Log enter
    logger.info('Card', 'Entered viewCard()');

    // Debug props.log(props);
    logger.debug('Card', `Props: ${JSON.stringify(props)}`);
    props.onClick(props.id, uri);

    // Log exit
    logger.info('Card', 'Exited viewCard()');
  }

  const completeCard = () => {
    // Log enter
    logger.info('Card', 'Entered completeCard()');

    props.onComplete(props.id)

    // Log exit
    logger.info('Card', 'Exited completeCard()');
  };

  const deleteCard = () => {

    // Log enter
    logger.info('Card', 'Entered deleteCard()');

    // Delete
    props.onDelete(props.id)

    // Log exit
    logger.info('Card', 'Exited deleteCard()');
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
              <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={modalCompleteIdHash}>
                Complete
              </button>

              <button onClick={() => viewCard(props.id, '/edit/')} className="btn btn-primary button">
                Edit
              </button>
            </>
          }

          {/* Delete button always shows */}
          <button className="btn btn-outline-danger button" data-bs-toggle="modal" data-bs-target={modalDeleteIdHash}>Delete</button>
        </div>
      </div>

      {/* Modal popup */}
      <div className="modal fade" id={modalCompleteId} aria-labelledby={modalCompleteLabelId} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={modalCompleteLabelId}>Confirm Complete</h5>
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
      <div className="modal fade" id={modalDeleteId} aria-labelledby={modalDeleteLabelId} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={modalDeleteLabelId}>Confirm Delete</h5>
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