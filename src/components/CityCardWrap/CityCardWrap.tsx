import * as React from "react";
import CityCard from "./CityCard/CityCard";
import "./style.css";
import CityCardData from "../../data/CityCardData.json";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function CityCardWrap() {
  const COUNT = 6;
  const getCards = (count: number) => {
    let content = [];
    for (let i = 0; i < count; i++) {
      content.push(
        <CityCard
          key={i}
          name={CityCardData.name}
          count={Number(CityCardData.count)}
        />
      );
    }
    return content;
  };

  return (
    <div className="CityCardWrap">
      <div className="CityCardWrapHeader">
        <h2>Popular locations</h2>
        <Link to="locations" style={{ textDecoration: 'none' }} >
          <Button className="ViewAll"> View All Locations &rarr;</Button>
        </Link>
      </div>

      <div className="CityCardGallery">{getCards(COUNT)}</div>
    </div>
  );
}
