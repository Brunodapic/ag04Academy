import * as S from "./SearchStyledComponents";
import {
  Button,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TypeOfAccommodationComponent from "./TypeOfAccommodationComponent";

export default function AdvancedSearch() {
  return (
    <div>
      <S.AccommodationSearchInner>
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
    </div>
  );
}
