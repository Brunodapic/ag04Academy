import * as React from "react";
import "./style.css";
import image from "../../images/header.png";
import AccommodationSearch from "../Search/AccommodationSearch";
import accommodationFormInterface from "../../models/typeOfAccommodation";

export default function DisplayHeader() {
  const AccommodationSearchResult = (data: accommodationFormInterface) => {
    console.log(data);
  };

  return (
    <div className="DisplayHeader">
      <img className="DisplayHeaderImage" src={image} alt="Header" />
      <AccommodationSearch
        AccommodationSearchResult={AccommodationSearchResult}
      />
    </div>
  );
}
