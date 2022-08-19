import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import AccommodationCard from "./AccommodationCard/AccommodationCard";
import "./style.css";

export default function AccommodationCardWrap({
  filterData,
}: {
  filterData?: any;
}) {
  const {
    data: accomodations,

    loaded: accomodationsLoaded,
  } = useAxios("Accomodations/recommendation", "GET");

  function useFilterData(value: any) {
    if (filterData.typeOfAccommodation && filterData.number) {
      return (
        value.type === filterData.typeOfAccommodation &&
        value.capacity >= filterData.number
      );
    } else {
      return value;
    }
  }

  const COUNT = 4;
  const getCards = (count: number) => {
    let content: JSX.Element[] = [];

    if (accomodationsLoaded) {
      if (
        filterData &&
        filterData.typeOfAccommodation &&
        filterData.number &&
        accomodations
      ) {
        const myClonedArray: any[] = [];
        // @ts-ignore
        accomodations.forEach((val: any) =>
          myClonedArray.push(Object.assign({}, val))
        );
        var accomodationsFiler = myClonedArray.filter(useFilterData);
        accomodationsFiler.map((accomodation) =>
          content.push(
            <AccommodationCard
              key={accomodation.id}
              FullAccommodationDetailsProps={accomodation}
            />
          )
        );
        return content;
      }

      // @ts-ignore
      accomodations.map((accomodation) =>
        content.push(
          <AccommodationCard
            key={accomodation.id}
            FullAccommodationDetailsProps={accomodation}
          />
        )
      );
    } else {
      for (let i = 0; i < count; i++) {
        content.push(
          <AccommodationCard
            key={i}
            FullAccommodationDetailsProps={undefined}
          />
        );
      }
    }

    return content; //.slice(0, lenOfAcc).slice(0,-1);
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
