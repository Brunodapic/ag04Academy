import { SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import * as S from "./SearchStyledComponents";

export default function SimpleSearch(props: any) {
  const [location, setLocation] = useState("");

  return (
    <div>
      <S.AccommodationSimpleSearchInner onSubmit={props.SearchResult}>
        <TextField
          name="location"
          type="text"
          label="Where are you going?"
          variant="outlined"
          value={location}
          onChange={(newValue) => setLocation(newValue.target.value)}
        />
        <S.AccommodationSearchButton
          type="submit"
          value="Submit"
          sx={{ backgroundColor: "#40E0D0", color: "white" }}
          color="primary"
        >
          Search
        </S.AccommodationSearchButton>
      </S.AccommodationSimpleSearchInner>
    </div>
  );
}
