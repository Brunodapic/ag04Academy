import * as S from "./SearchStyledComponents";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import TypeOfAccommodationComponent from "./TypeOfAccommodationComponent";
import { typeOfAccommodation } from "../../models/typeOfAccommodation";

interface reservationFormInterface {
  typeOfAccommodation: typeOfAccommodation | undefined;
  number: number;
  checkIn: string;
  checkOut: string;
}

const AdvancedSearch: React.FC<{
  SearchResult: (data: reservationFormInterface) => void;
  data: any;
}> = (props) => {

  const [typeOfAccommodation, setTypeOfAccommodation] =
    useState<typeOfAccommodation>(
      props.data ? props.data.state.data.typeOfAccommodation  : ''
    );
  const [number, setNumber] = useState(
    props.data ? props.data.state.data.number : 0
  );
  const [checkIn, setCheckIn] = useState(
    props.data ? props.data.state.data.checkIn : FormatDate(new Date())
  );
  const [checkOut, setCheckOut] = useState(
    props.data ? props.data.state.data.checkOut : FormatDate(new Date())
  );

  
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
    return formattedDate;
  }

  const numberChange = (event: any) => {
    setNumber(event.target.value);
  };
  const checkInChange = (event: any) => {
    setCheckIn(event.target.value);
  };
  const checkOutChange = (event: any) => {
    setCheckOut(event.target.value);
  };

  const advanceSearchSubmit = () => {
    const reservationForm = {
      typeOfAccommodation: typeOfAccommodation,
      number: number,
      checkIn: checkIn,
      checkOut: checkOut,
    };

    props.SearchResult(reservationForm);

    setNumber(0);
    setCheckIn(FormatDate(new Date()));
    setCheckOut(FormatDate(new Date()));
  };

  return (
    <div>
      <S.AccommodationSearchInner>
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
          typeOfAccommodation={typeOfAccommodation}
        />
        <S.AccommodationSearchButton
          sx={{ backgroundColor: "#40E0D0", color: "white" }}
          color="primary"
          onClick={() => advanceSearchSubmit()}
        >
          Search
        </S.AccommodationSearchButton>
      </S.AccommodationSearchInner>
    </div>
  );
};

export default AdvancedSearch;
