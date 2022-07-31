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

export default function AccommodationSearch() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <S.AccommodationSearchOuter>
      <S.AccommodationSearchInner>
        <TextField type="text" label="Full Name" variant="outlined" />
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
        <TextField type="number" label="Number of guests" variant="outlined" />
        <FormControl >
          <InputLabel id="type">What type of accommodation?</InputLabel>
          <Select
            id="type"
            value={age}
            label="What type of accommodation?"
            onChange={handleChange}
          >
            <MenuItem value={"Room"}>Room</MenuItem>
            <MenuItem value={"House"}>House</MenuItem>
            <MenuItem value={"Apartman"}>Apartman</MenuItem>
          </Select>
        </FormControl>
        <S.AccommodationSearchButton >
            Search
        </S.AccommodationSearchButton>
      </S.AccommodationSearchInner>
    </S.AccommodationSearchOuter>
  );
}
