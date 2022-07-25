import * as React from "react";
import './style.css'
import image from "../../images/header.png"

export default function DisplayHeader() {
  return (
    <div className="DisplayHeader">
      <img src={image} />
    </div>
  );
}
