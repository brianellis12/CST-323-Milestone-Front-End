import React from "react";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

const GundamList = (props) => {
  // handle click event for selection
  const handleSelectionOne = (gundamId, uri) => {
    console.log("Selected ID is " + gundamId);
    props.onClick(gundamId, navigator, uri);
  };

  console.log("props gundamList", props);

  // setup navigation
  const navigator = useNavigate();

  // create object list through mapping properties
  const gundamModels = props.gundamList.map((gundam) => {
    return (
      <Card
        key={gundam.modelId}
        modelId={gundam.modelId}
        modelName={gundam.modelName}
        grade={gundam.grade}
        origin={gundam.origin}
        purchaseDate={gundam.purchaseDate.substring(0,10)}
        price={gundam.price}
        image={gundam.image}
        buttonText="View"
        imgUrl={gundam.image}
        onClick={handleSelectionOne}
      />
    );
  });
  return <div className="container">{gundamModels}</div>;
};

export default GundamList;
