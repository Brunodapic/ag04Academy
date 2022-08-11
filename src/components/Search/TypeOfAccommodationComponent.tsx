import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import {typeOfAccommodation} from "../../models/typeOfAccommodation";

export default function TypeOfAccommodationComponent(props: any) {
  const [accommodation, setAccommodation] = useState(props?.typeOfAccommodation?props.typeOfAccommodation:"");

  const keys = Object.keys(typeOfAccommodation).filter((v) => isNaN(Number(v)));
  const handleChange = (event: SelectChangeEvent) => {
    setAccommodation(event.target.value as string);
    props.setTypeOfAccommodation(event.target.value as string)
  };

  return (
    <FormControl>
      <InputLabel id="type">What type of accommodation?</InputLabel>
      <Select
        id="type"
        value={accommodation}
        label="What type of accommodation?"
        onChange={handleChange}
      >
        {keys.map((acc: string) => (
          <MenuItem key={acc} value={acc}>
            {acc}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
