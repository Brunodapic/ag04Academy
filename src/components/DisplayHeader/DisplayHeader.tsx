import * as React from "react";
import './style.css'
import image from "../../images/header.png"
import AccommodationSearch from "../Search/AccommodationSearch";

export default function DisplayHeader() {
  return (
    <div className="DisplayHeader">
      <img className="DisplayHeaderImage" src={image} />
      <AccommodationSearch />
    </div>
  );
}
