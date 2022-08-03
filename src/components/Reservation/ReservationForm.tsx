import { TextField } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import * as S from "./ReservationStyledComponent";

interface reservationFormInterface {
  name: string;
  email: string;
  number: number;
  checkIn: Date;
  checkOut: Date;
}

export default function ReservationForm({
  getDataFromForm,
}: {
  getDataFromForm: (data: reservationFormInterface) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const nameChange = (event: any) => {
    setName(event.target.value);
  };
  const emailChange = (event: any) => {
    setEmail(event.target.value);
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

  const reservationFromSubmit = () => {
    const reservationForm = {
      name: name,
      email: email,
      number: number,
      checkIn: checkIn,
      checkOut: checkOut,
    };

    getDataFromForm(reservationForm);
    setName("");
    setEmail("");
    setNumber(0);
    setCheckIn(new Date());
    setCheckOut(new Date());
  };

  return (
    <S.ReservationFormDiv>
      <h2>Book your stay</h2>
      <S.ReservationForm>
        <TextField
          type="text"
          label="Full Name"
          variant="outlined"
          value={name}
          onChange={nameChange}
        />
        <TextField
          type="email"
          label="Email address"
          variant="outlined"
          value={email}
          onChange={emailChange}
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
        <S.DateFormDiv>
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
        </S.DateFormDiv>
        <S.ReservationFormSubmit>
          <S.ReservationFormSubmitButton
            variant="contained"
            onClick={() => reservationFromSubmit()}
          >
            Book your stay
          </S.ReservationFormSubmitButton>
        </S.ReservationFormSubmit>
      </S.ReservationForm>
    </S.ReservationFormDiv>
  );
}
