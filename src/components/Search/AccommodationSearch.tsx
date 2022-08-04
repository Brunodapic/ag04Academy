import { TextField } from "@mui/material";
import React, { useState } from "react";
import * as S from "./SearchStyledComponents";
import TypeOfAccommodationComponent from "./TypeOfAccommodationComponent";
import typeOfAccommodation from "../../models/typeOfAccommodation";
import accommodationFormInterface from "../../models/typeOfAccommodation";

const AccommodationSearch: React.FC<{
  AccommodationSearchResult: (data: accommodationFormInterface) => void;
}> = (props) => {
  const [location, setLocation] = useState("");
  const [typeOfAccommodation, setTypeOfAccommodation] =
    useState<typeOfAccommodation>();
  const [number, setNumber] = useState(0);
  const [checkIn, setCheckIn] = useState(FormatDate(new Date()));
  const [checkOut, setCheckOut] = useState(FormatDate(new Date()));

  function FormatDate(todayDate2: Date) {
    const todayDate = new Date(todayDate2); 
    const formatDate =
      todayDate.getDate() < 10
        ? `0${todayDate.getDate()}`
        : todayDate.getDate();
    const formatMonth =
      todayDate.getMonth() < 10
        ? `0${todayDate.getMonth()}`
        : todayDate.getMonth();
    const formattedDate = [
      todayDate.getFullYear(),
      formatMonth,
      formatDate,
    ].join("-");
    return formattedDate
  }

  const locationChange = (event: any) => {
    setLocation(event.target.value);
  };
  const numberChange = (event: any) => {
    setNumber(event.target.value);
  };
  const checkInChange = (event: any) => {
    setCheckIn(event.target.value);
  };
  const checkOutChange = (event: any) => {
    setCheckOut(event.target.value);
  };

  const accommodationSearchSubmit = () => {
    const reservationForm = {
      location: location,
      typeOfAccommodation: typeOfAccommodation,
      number: number,
      checkIn: checkIn,
      checkOut: checkOut,
    };

    //props.SearchResult(reservationForm);
    console.log(reservationForm);
    setLocation("");
    setTypeOfAccommodation(undefined);
    setNumber(0);
    setCheckIn(FormatDate(new Date()));
    setCheckOut(FormatDate(new Date()));
  };

  return (
    <S.AccommodationSearchOuter>
      <S.AccommodationSearchInner>
        <TextField
          type="text"
          label="Where are you going?"
          variant="outlined"
          value={location}
          onChange={locationChange}
        />
        <TextField
          id="date"
          label="Check in"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={checkIn}
          onChange={checkInChange}
        />

        <TextField
          id="date"
          label="Check out"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={checkOut}
          onChange={checkOutChange}
        />

        <TextField
          type="number"
          label="Number of guests"
          variant="outlined"
          InputProps={{
            inputProps: {
              max: 20,
              min: 0,
            },
          }}
          value={number}
          onChange={numberChange}
        />
        <TypeOfAccommodationComponent
          setTypeOfAccommodation={setTypeOfAccommodation}
        />
        <S.AccommodationSearchButton
          sx={{ backgroundColor: "#40E0D0", color: "white" }}
          color="primary"
          onClick={() => accommodationSearchSubmit()}
        >
          Search
        </S.AccommodationSearchButton>
      </S.AccommodationSearchInner>
    </S.AccommodationSearchOuter>
  );
};

export default AccommodationSearch;
