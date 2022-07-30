import { Button } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import AccommodationCard from "./AccommodationCard/AccommodationCard";
import "./style.css";

export default function AccommodationCardWrap() {
  const COUNT = 4;
  const getCards = (count: number) => {
    let content = [];
    for (let i = 0; i < count; i++) {
      content.push(<AccommodationCard key={i} />);
    }
    return content;
  };

  return (
    <div className="AccommodationCardWrap">
      <div className="AccommodationCardHeader">
        <h2>Homes guests love</h2>
        <Link to="favorites">
          <Button className="ViewAll"> View All Homes &rarr;</Button>
        </Link>
      </div>
      <div className="AccommodationCardGallery">{getCards(COUNT)}</div>
    </div>
  );
}
