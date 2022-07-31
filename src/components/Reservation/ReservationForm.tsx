import { Button, Input, TextField } from "@mui/material";
import * as React from "react";
import * as S from "./ReservationStyledComponent";

export default function ReservationForm() {
  return (
    <S.ReservationFormDiv>
      <h2>Book your stay</h2>
      <S.ReservationForm>
        <TextField type="text" label="Full Name" variant="outlined" />
        <TextField type="email" label="Email address" variant="outlined" />
        <TextField type="number" label="Number of guests" variant="outlined" />
        <S.DateFormDiv>
          <TextField
            id="date"
            label="Check in"
            type="date"
            defaultValue={String(new Date())}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="date"
            label="Check out"
            type="date"
            defaultValue={null}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </S.DateFormDiv>
        <S.ReservationFormSubmit>
          <S.ReservationFormSubmitButton variant="contained" >
            Book your stay
          </S.ReservationFormSubmitButton>
        </S.ReservationFormSubmit>
      </S.ReservationForm>
    </S.ReservationFormDiv>
  );
}
