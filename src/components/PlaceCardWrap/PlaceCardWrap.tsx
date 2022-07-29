import * as React from "react";
import PlaceCardElement from "./PlaceCardElement/PlaceCardElement";
import "./style.css";
import PlaceCardData from "../../data/PlaceCardData.json";
import TreeHouse from "../../images/TreeHouse.jpeg";
import ModernHouse from "../../images/ModernHouse.png";
import { Button } from "@mui/material";

export default function PlaceCardWrap() {
  const COUNT = 4;
  const getCards = (count: number) => {
    let content = [];
    for (let i = 0; i < count; i++) {
      content.push(
        <PlaceCardElement
          key={i}
          title={PlaceCardData[i % 2].title}
          location={PlaceCardData[i % 2].location}
          subtitle={PlaceCardData[i % 2].subtitle}
          image={i % 2 == 0 ? TreeHouse : ModernHouse}
        />
      );
    }
    return content;
  };

  return (
    <div className="PlaceCardWrap">
      <div className="PlaceCardHeader">
        <h2>My places</h2>
        <Button className="ViewAll"> View All My Places &rarr;</Button>
      </div>

      <div className="PlaceCardWrapGallery">{getCards(COUNT)}</div>
    </div>
  );
}
