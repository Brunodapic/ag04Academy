import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import * as S from "./SearchStyledComponents";
import typeOfAccommodation from "../../models/typeOfAccommodation";
import React from "react";

export default function TypeOfAccommodationComponent() {
  const [age, setAge] = React.useState("");

  const keys = Object.keys(typeOfAccommodation).filter((v) => isNaN(Number(v)));

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl>
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
  );
}
