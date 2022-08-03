import * as S from "./SearchStyledComponents";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import TypeOfAccommodationComponent from "./TypeOfAccommodationComponent";
import typeOfAccommodation from "../../models/typeOfAccommodation";

interface reservationFormInterface {
  typeOfAccommodation: typeOfAccommodation | undefined;
  number: number;
  checkIn: Date;
  checkOut: Date;
}

const AdvancedSearch: React.FC<{
  SearchResult: (data: reservationFormInterface) => void;
}> = (props) => {
  const [typeOfAccommodation, setTypeOfAccommodation] =
    useState<typeOfAccommodation>();
  const [number, setNumber] = useState(0);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

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
    setTypeOfAccommodation(undefined);
    setNumber(0);
    setCheckIn(new Date());
    setCheckOut(new Date());
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
