import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const EditGundam = (props) => {
  // gundam default model
  let gundam = {
    modelName: '',
    grade: '',
    origin: '',
    purchaseDate: '',
    price: 0.00,
    image: '',
  };

  // set if creating or editing
  let newGundamCreation = true;

  // determine if gundam prop was sent through
  if (props.gundam) {
    gundam = props.gundam;
    newGundamCreation = false;
  }

  // const variables from model
  const [modelName, setModelName] = useState(gundam.modelName);
  const [grade, setGrade] = useState(gundam.grade);
  const [origin, setOrigin] = useState(gundam.origin);
  const [purchaseDate, setPurchaseDate] = useState(gundam.purchaseDate);
  const [price, setPrice] = useState(gundam.price);
  const [image, setImage] = useState(gundam.image);
  const navigate = useNavigate();

  // method to submit form and object
  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("submit");
    const editedGundam = {
      modelId: gundam.modelId,
      modelName: modelName,
      grade: grade,
      origin: origin,
      purchaseDate: purchaseDate.substring(0, 10),
      price: price,
      image: image,
    };
    console.log(editedGundam);

    saveGundam(editedGundam);
  };

  // send post or put based on newGundamCreation
  const saveGundam = async (gundam) => {
    let response;
    if (newGundamCreation)
      response = await dataSource.post('/models', gundam);
    else
      response = await dataSource.put('/models', gundam);
    console.log(response);
    console.log(response.data);
    props.onEditGundam(navigate);
  };

  // navigate to home
  const handleCancel = () => {
    navigate("/");
  };

  // methods to update properties
  const updateName = (event) => {
    setModelName(event.target.value);
  };
  const updateGrade = (event) => {
    setGrade(event.target.value);
  };
  const updateOrigin = (event) => {
    setOrigin(event.target.value);
  };
  const updatePurchaseDate = (event) => {
    setPurchaseDate(event.target.value);
  };
  const updatePrice = (event) => {
    setPrice(event.target.value);
  };
  const updateImage = (event) => {
    setImage(event.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <h1>{newGundamCreation ? "Create New" : "Edit"} Gundam</h1>
        <div className="form-group">
          <label htmlFor="modelName">Model Name</label>
          <input type="text" className="form-control" id="modelName" placeholder="Enter Model Name" value={modelName} onChange={updateName} />
          <label htmlFor="grade">Model Grade</label>
          <input type="text" className="form-control" id="grade" placeholder="Enter Model Grade" value={grade} onChange={updateGrade} />
          <label htmlFor="origin">Model Origin</label>
          <input type="text" className="form-control" id="origin" placeholder="Enter Model Origin" value={origin} onChange={updateOrigin} />
          <label htmlFor="purchaseDate">Purchase Date</label>
          <input type="text" className="form-control" id="purchaseDate" placeholder="Enter Purchase Date" value={purchaseDate.substring(0, 10)} onChange={updatePurchaseDate} />
          <label htmlFor="purchaseDate">Price</label>
          <input type="text" className="form-control" id="price" placeholder="Enter Price" value={price} onChange={updatePrice} />
          <label htmlFor="image">Model Image</label>
          <input type="text" className="form-control" id="image" placeholder="Enter Model Image" value={image} onChange={updateImage} />
        </div>
        <div align="center">
          <br/>
          <button type="button" className="btn btn-light button" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="btn btn-primary button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditGundam;
