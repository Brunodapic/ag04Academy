import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";
import * as S from "./SearchStyledComponents";
import TypeOfAccommodationComponent from "./TypeOfAccommodationComponent";

export default function AccommodationSearch() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <S.AccommodationSearchOuter>
      <S.AccommodationSearchInner>
        <TextField
          type="text"
          label="Where are you going?"
          variant="outlined"
        />
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
        />
        <TypeOfAccommodationComponent />
        <S.AccommodationSearchButton
          sx={{ backgroundColor: "#40E0D0", color: "white" }}
          color="primary"
        >
          Search
        </S.AccommodationSearchButton>
      </S.AccommodationSearchInner>
    </S.AccommodationSearchOuter>
  );
}
