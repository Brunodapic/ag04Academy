import React, { useEffect } from "react";
import CityCard from "./CityCard/CityCard";
import "./style.css";
import CityCardData from "../../data/CityCardData.json";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useSelector, useDispatch } from 'react-redux';
import { locationActions } from '../../store/index';
import { RootState } from "../../store";


export default function CityCardWrap({
  header,
  location,
}: {
  header: boolean;
  location?: string;
}) {

  
  const {
    cancel,
    data: citys,
    error,
    loaded:CitysLoaded ,
  } = useAxios("Location", "GET");

  const dispatch = useDispatch();
  const locations = useSelector((state: RootState) => state.locations);

  var cityss=citys as unknown as any[]
  if(CitysLoaded && citys &&(cityss.length>locations.length)){
    console.log("redux")
    dispatch(locationActions.init(citys));
  }

  const COUNT = 6;

  //filtriranje mi nije drago izvedeno ali content.filter mi nešto nije radio a knap sam s vremenom
  const getCards = (count: number) => {
    let content = [];
    if (CitysLoaded) {
      // @ts-ignore
      citys.map((city) => {
        if (location == "") {
          content.push(
            <CityCard
              key={city.id}
              name={city.name}
              count={Number(city.properties)}
              image={city.imageUrl}
            />
          );
        } else {
          if (city.name == location)
            content.push(
              <CityCard
                key={city.id}
                name={city.name}
                count={Number(city.properties)}
                image={city.imageUrl}
              />
            );
        }
      });
    } else {
      for (let i = 0; i < count; i++) {
        content.push(
          <CityCard
            key={i}
            name={CityCardData.name}
            count={Number(CityCardData.count)}
          />
        );
      }
    }

    if(content.length==0){
      return "No location with that name, search another name"
    }
    return content;
  };

  return (
    <div className="city-card-wrap">
      {header && (
        <div className="city-card-wrap-header">
          <h2>Popular locations</h2>
          <Link to="locations" style={{ textDecoration: "none" }}>
            <Button className="ViewAll"> View All Locations &rarr;</Button>
          </Link>
        </div>
      )}
      <div className="city-card-gallery">{getCards(COUNT)}</div>
    </div>
  );
}
