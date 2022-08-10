import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import {typeOfAccommodation} from "../../models/typeOfAccommodation";
import React, { useEffect } from "react";

export default function TypeOfAccommodationComponent(props: any) {
  const [accommodation, setAccommodation] = React.useState(props?.typeOfAccommodation?props.typeOfAccommodation:"");

  //nisam siguran jeli ovo najbolji način , možda sam mogao slati submit preko propa pa tako?
  useEffect(() => {
    props.setTypeOfAccommodation
      ? props.setTypeOfAccommodation(accommodation)
      : console.log();
  }, [accommodation]);

  const keys = Object.keys(typeOfAccommodation).filter((v) => isNaN(Number(v)));
  const handleChange = (event: SelectChangeEvent) => {
    setAccommodation(event.target.value as string);
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
