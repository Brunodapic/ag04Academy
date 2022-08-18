import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import AccommodationCard from "./AccommodationCard/AccommodationCard";
import "./style.css";

export default function AccommodationCardWrap({lenOfAcc}:{lenOfAcc:number}) {
  const {
    cancel,
    data: accomodations,
    error,
    loaded: accomodationsLoaded,
  } = useAxios("Accomodations", "GET");

  const COUNT = 4;
  const getCards = (count: number) => {
    let content = [];

    if (accomodationsLoaded) {
      // @ts-ignore
      
      accomodations.map((accomodation) =>
        content.push(<AccommodationCard key={accomodation.id} FullAccommodationDetailsProps={accomodation} />)
      );
    } else {
      for (let i = 0; i < count; i++) {
        content.push(<AccommodationCard key={i} FullAccommodationDetailsProps={undefined} />);
      }
    }
    return content.slice(0, lenOfAcc).slice(0,-1);
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
