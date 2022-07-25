import * as React from "react";
import CityCard from "./CityCard/CityCard";
import "./style.css";
import CityCardData from "../../data/CityCardData.json"
import { randomInt } from "crypto";


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
      <h2>Popular locations</h2>
      <div className="CityCardGallery">
      {getCards(COUNT)}
      </div>
    </div>
  );
}
