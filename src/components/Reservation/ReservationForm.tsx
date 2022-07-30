import { Button, Input, TextField } from "@mui/material";
import * as React from "react";
import * as S from "./ReservationStyledComponent";

export default function ReservationForm() {
  return (
    <S.ReservationFormDiv>
      <S.ReservationForm>
        <TextField
          type="text"
          label="Full Name"
          variant="outlined"
        />
        <TextField
          type="email"
          label="Email address"
          variant="outlined"
        />
        <TextField
          type="number"
          label="Number of guests"
          variant="outlined"
        />
        <S.DateFormDiv>
          <TextField
            id="date"
            label="Check in"
            type="date"
            defaultValue="2017-05-24"
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
        <Button variant="contained" color="primary">
          save
        </Button>
      </S.ReservationForm>
    </S.ReservationFormDiv>
  );
}
