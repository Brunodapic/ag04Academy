import { Button } from "@mui/material";
import React from "react";
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
    <div className="accommodation-card-wrap">
      <div className="accommodation-card-header">
        <h2>Homes guests love</h2>
        <Link to="/locations/homes" style={{ textDecoration: "none" }}>
          <Button className="ViewAll"> View All Homes &rarr;</Button>
        </Link>
      </div>
      <div className="accommodation-card-gallery">{getCards(COUNT)}</div>
    </div>
  );
}
