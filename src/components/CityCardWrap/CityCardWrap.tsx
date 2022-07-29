import * as React from "react";
import CityCard from "./CityCard/CityCard";
import "./style.css";
import CityCardData from "../../data/CityCardData.json"
import { randomInt } from "crypto";
import { Button } from "@mui/material";


export default function CityCardWrap() {
  const COUNT=6
  const getCards = (count: number) => {
    let content = [];
    for (let i = 0; i < count; i++) {
      content.push(<CityCard key={i} name={CityCardData.name} count={Number(CityCardData.count)} />);
    }
    return content;
  };

  return (
    <div className="CityCardWrap">
      <div className="CityCardWrapHeader">
      <h2>Popular locations</h2>
      <Button className="ViewAll"> View All Homes &rarr;</Button>
      </div>
      
      <div className="CityCardGallery">
      {getCards(COUNT)}
      </div>
    </div>
  );
}
