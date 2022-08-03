import { TextField } from "@mui/material";
import { useState } from "react";
import * as S from "./SearchStyledComponents";

const SimpleSearch: React.FC<{ SearchResult: (data: string) => void }> = (
  props
) => {
  const [location, setLocation] = useState("");

  const SimpleSearchSubmit = () => {
    props.SearchResult(location);
  };

  return (
    <div>
      <S.AccommodationSimpleSearchInner>
        <TextField
          name="location"
          type="text"
          label="Where are you going?"
          variant="outlined"
          value={location}
          onChange={(newValue) => setLocation(newValue.target.value)}
        />
        <S.AccommodationSearchButton
          value="Submit"
          sx={{ backgroundColor: "#40E0D0", color: "white" }}
          color="primary"
          onClick={() => SimpleSearchSubmit()}
        >
          Search
        </S.AccommodationSearchButton>
      </S.AccommodationSimpleSearchInner>
    </div>
  );
};

export default SimpleSearch;
