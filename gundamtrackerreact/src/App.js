import React, { useEffect, useState } from 'react';
import './App.css';
import dataSource from './dataSource';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchGundam from './SearchGundam';
import NavBar from './NavBar';
import EditGundam from './EditGundam';
import OneGundam from './OneGundam';

const App = () => {
  // constant useState variables
  const [gundamList, setGundamList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [selectedGundamId, setSelectedGundamId] = useState(0);

  let refresh = false;

  // method to update list based on search results
  const updateSearchResults = (phrase) => {
    console.log("Searching for: " + phrase);
    setSearchPhrase(phrase);
  };

  // get list of models
  useEffect(() => {
    loadGundam();
  }, [refresh]);

  // send get request to API
  const loadGundam = async () => {
    const response = await dataSource.get("/models");

    setGundamList(response.data);
  };

  // return models matching search term
  const renderedList = gundamList.filter((gundam) => {
    if (
      gundam.modelName.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      searchPhrase === ""
    ) {
      return true;
    }
    return false;
  });

  // pull data from a single model
  const updateSingleGundam = (id, navigate, uri) => {
    console.log('Update Single Gundam = ', id);
    console.log('Update Single Gundam = ', navigate);
    var indexNumber = 0;
    for (var i = 0; i < gundamList.length; ++i) {
      if(gundamList[i].modelId === id) indexNumber = i;
    }
    setSelectedGundamId(indexNumber);
    let path = uri + indexNumber;
    console.log('path' + path);
    navigate(path);
  }

  // navigate to home after editing a model
  const onEditGundam = (navigate) => {
    loadGundam();
    navigate("/");
  }

  console.log("renderedList", renderedList);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<SearchGundam updateSearchResults={updateSearchResults} gundamList={renderedList} updateSingleGundam={updateSingleGundam} />} />
        <Route exact path="/new" element={<EditGundam onEditGundam={onEditGundam} />} />
        <Route exact path="/edit/:modelId" element={<EditGundam onEditGundam={onEditGundam} gundam={gundamList[selectedGundamId]} />} />
        <Route exact path="/show/:modelId" element={<OneGundam gundam={gundamList[selectedGundamId]} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
