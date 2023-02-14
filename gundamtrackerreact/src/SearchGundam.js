import React from "react";
import SearchForm from "./SearchForm";
import GundamList from "./GundamList";

const SearchAlbum = (props) => {
  console.log("props with update single album", props);
  return (
    <div className="container">
      <SearchForm onSubmit={props.updateSearchResults} />
      <GundamList
        gundamList={props.gundamList}
        onClick={props.updateSingleGundam}
      />
    </div>
  );
};

export default SearchAlbum;
