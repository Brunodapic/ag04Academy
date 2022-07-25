import * as React from "react";
import CityCard from "./CityCard/CityCard";
import "./style.css";
import CityCardData from "../../data/CityCardData.json"


export default function CityCardWrap() {
  const COUNT=6
  const getCards = (count: number) => {
    let content = [];
    for (let i = 0; i < count; i++) {
      content.push(<CityCard name={CityCardData.name} count={Number(CityCardData.count)} />);
    }
    return content;
  };

  return (
    <div className="CityCardWrap">
      {getCards(COUNT)}
    </div>
  );
}
