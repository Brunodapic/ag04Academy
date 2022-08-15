import { TextField } from "@mui/material";
import { useState } from "react";
import * as S from "./ReservationStyledComponent";

interface reservationFormInterface {
  name: string;
  email: string;
  number: number;
  //orginalno je za checkin i checkout bio Date , ali imao sam error-e vezi neke konverzije datuma
  checkIn: string;
  checkOut: string;
}

export default function ReservationForm({
  getDataFromForm,
}: {
  getDataFromForm: (data: reservationFormInterface) => void;
}) {
  const [name, setName] = useState("");
  const nameValidation = name.length < 300 && name.length >1;
  const [email, setEmail] = useState("");
  const emailValidation = email.includes("@") && email.length < 300 && email.length > 1;

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
    return formattedDate;
  }

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
    setCheckIn(FormatDate(event.target.value));
  };
  const checkOutChange = (event: any) => {
    setCheckOut(FormatDate(event.target.value));
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
    setCheckIn(FormatDate(new Date()));
    setCheckOut(FormatDate(new Date()));
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
          error={!nameValidation}
          helperText={
            nameValidation
              ? ""
              : "Full name should have max 300 characters."
          }
          onChange={nameChange}
        />
        <TextField
          type="email"
          label="Email address"
          variant="outlined"
          value={email}
          error={!emailValidation}
          helperText={
            emailValidation
              ? ""
              : "Email address should have max 100 character and be valid email address"
          }
          onChange={emailChange}
        />
        <TextField
          type="number"
          label="Number of guests"
          variant="outlined"
          InputProps={{
            inputProps: {
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
            disabled={!emailValidation || !nameValidation}
          >
            Book your stay
          </S.ReservationFormSubmitButton>
        </S.ReservationFormSubmit>
      </S.ReservationForm>
    </S.ReservationFormDiv>
  );
}
