import React, { useEffect } from "react";
import CityCard from "./CityCard/CityCard";
import "./style.css";
import CityCardData from "../../data/CityCardData.json";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";
import useBackend from "../../hooks/useBackend";
import getUsers from "../../hooks/useAxios";

export default function CityCardWrap() {

   getUsers()

  const seeData = (data: any) => {
    console.log(data);
  };

  const {
    isLoading,
    error,
    sendRequest: getData,
  } = useBackend(
    {
      url: api,
      method: "GET",
      headers: undefined,
      body: undefined,
    },
    seeData
  );

  console.log(isLoading);
  console.log(error);
  console.log(getData);

  useEffect(() => {
    getData();
  }, []);

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
    <div className="city-card-wrap">
      <div className="city-card-wrap-header">
        <h2>Popular locations</h2>
        <Link to="locations" style={{ textDecoration: "none" }}>
          <Button className="ViewAll"> View All Locations &rarr;</Button>
        </Link>
      </div>

      <div className="city-card-gallery">{getCards(COUNT)}</div>
    </div>
  );
}
