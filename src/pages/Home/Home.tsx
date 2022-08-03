import * as React from "react";
import AccommodationCardWrap from "../../components/AccommodationWrap/AccommodationCardWrap";
import CityCardWrap from "../../components/CityCardWrap/CityCardWrap";
import DisplayFooter from "../../components/DisplayFooter/DisplayFooter";
import DisplayHeader from "../../components/DisplayHeader/DisplayHeader";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import PlaceCardWrap from "../../components/PlaceCardWrap/PlaceCardWrap";

export default function Home() {
  return (
    <div>
      <MainWrapp>
        <DisplayHeader />
        <CityCardWrap />
        <AccommodationCardWrap />
        <PlaceCardWrap />
        <DisplayFooter />
      </MainWrapp>
    </div>
  );
}
