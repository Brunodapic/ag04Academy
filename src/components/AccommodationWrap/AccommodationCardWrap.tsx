import * as React from "react";
import AccommodationCard from "./AccommodationCard/AccommodationCard";
import './style.css'

export default function AccommodationCardWrap() {
    const COUNT=4
    const getCards = (count: number) => {
      let content = [];
      for (let i = 0; i < count; i++) {
        content.push(<AccommodationCard key={i} />);
      }
      return content;
    };
  
    return (
      <div className="AccommodationCardWrap">
        <h2>Homes guests love</h2>
        <div className="AccommodationCardGallery">
        {getCards(COUNT)}
        </div>
      </div>
    );
}
