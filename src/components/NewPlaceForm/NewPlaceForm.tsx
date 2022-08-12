import {
  Button,
  FormControlLabel,
  Rating,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import TypeOfAccommodationComponent from "../Search/TypeOfAccommodationComponent";
import * as S from "./NewPlacFormStyle";
import { typeOfAccommodation } from "../../models/typeOfAccommodation";
import FullAccommodationDetailsProps from "../../models/accommodationModel";

const newPlaceStateReducer = (state: any, action: any) => {
  const type = action.type;
  switch (type) {
    case "CATEGORIZATION_CHANGE":
      return {
        ...state,
        categorization: action.value,
      };
    case "personCount_CHANGE":
      return {
        ...state,
        personCount: action.value,
      };
    case "PRICE_CHANGE":
      return {
        ...state,
        price: action.value,
      };
    case "NAME_CHANGE": {
      return {
        ...state,
        title: action.value,
      };
    }
    case "SHORT_CHANGE": {
      return { ...state, subtitle: action.value };
    }
    case "LONG_CHANGE": {
      return {
        ...state,
        description: action.value,
      };
    }
    case "LOCATION_CHANGE": {
      return {
        ...state,
        location: action.value,
      };
    }
    case "POSTAL_CHANGE": {
      return {
        ...state,
        postalCode: action.value,
      };
    }
    case "URL_CHANGE": {
      return {
        ...state,
        imageUrl: action.value,
      };
    }
    case "TOGGLE_CHANGE": {
      return {
        ...state,
        cancellation: !state.cancellation,
      };
    }
    case "TYPEOFACCOMMODATION_CHANGE": {
      return {
        ...state,
        type: action.value,
      };
    }
    default:
      return {
        title: "",
        subtitle: "",
        description: "",
        categorization: 0,
        type: null,
        personCount: 0,
        price: 0,
        location: "",
        postalCode: "",
        imageUrl: "",
        cancellation: false,
      };
  }
};

const NewPlacForm: React.FC<{
  FormData: FullAccommodationDetailsProps | undefined;
  toggleSetFormAdd: () => void;
}> = (props) => {
  const newPlaceDefault = {
    title: props.FormData ? props.FormData.title : "",
    subtitle: props.FormData ? props.FormData.subtitle : "",
    description: props.FormData ? props.FormData.description : "",
    categorization: props.FormData ? props.FormData.categorization : 0,
    type: props.FormData ? props.FormData.type : "",
    personCount: props.FormData ? props.FormData.personCount : 0,
    price: props.FormData ? props.FormData.price : 0,
    location: props.FormData ? props.FormData.location : "",
    postalCode: props.FormData ? props.FormData.postalCode : "",
    imageUrl: props.FormData ? props.FormData.imageUrl : "",
    freeCancelation: props.FormData ? props.FormData.freeCancelation : false,
  };

  const [type, setType] =
    useState<typeOfAccommodation>();

  const [newPlaceState, dispatchNewPlaceState] = useReducer(
    newPlaceStateReducer,
    newPlaceDefault
  );

  useEffect(() => {
    dispatchNewPlaceState({
      type: "TYPEOFACCOMMODATION_CHANGE",
      value: type,
    });
  }, [type]);

  const numberChange = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "Categorization") {
      dispatchNewPlaceState({
        type: "CATEGORIZATION_CHANGE",
        value: Number(value),
      });
    }
    else if (name === "personCount") {
      dispatchNewPlaceState({
        type: "personCount_CHANGE",
        value: Number(value),
      });
    } else {
      dispatchNewPlaceState({ type: "PRICE_CHANGE", value: Number(value) });
    }
  };

  const toggleChange = (event: any) => {
    dispatchNewPlaceState({ type: "TOGGLE_CHANGE" });
  };

  const textChange = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    switch (name) {
      case "name": {
        dispatchNewPlaceState({
          type: "NAME_CHANGE",
          value: value,
        });
        break;
      }
      case "short": {
        dispatchNewPlaceState({
          type: "SHORT_CHANGE",
          value: value,
        });
        break;
      }
      case "long": {
        dispatchNewPlaceState({
          type: "LONG_CHANGE",
          value: value,
        });
        break;
      }
      case "location": {
        dispatchNewPlaceState({
          type: "LOCATION_CHANGE",
          value: value,
        });
        break;
      }
      case "postal": {
        dispatchNewPlaceState({
          type: "POSTAL_CHANGE",
          value: value,
        });
        break;
      }
      case "url": {
        dispatchNewPlaceState({
          type: "URL_CHANGE",
          value: value,
        });
        break;
      }
      default: {
        console.log("ERROR");
        break;
      }
    }
  };

  const submitHandle = (event: any) => {
    event.preventDefault();
    console.log(newPlaceState)
    props.toggleSetFormAdd();
  };

  return (
    <S.NewPlaceFormWrap>
      <h2>Add new place</h2>
      <S.NewPlaceForm onSubmit={submitHandle}>
        <TextField
          required
          type="text"
          label="Listing name"
          variant="outlined"
          name="name"
          value={newPlaceState.title}
          onChange={textChange}
        />
        <TextField
          required
          type="text"
          label="Short description"
          name="short"
          variant="outlined"
          value={newPlaceState.subtitle}
          onChange={textChange}
        />
        <TextField
          required
          type="text"
          label="Long description"
          name="long"
          variant="outlined"
          multiline
          rows={4}
          value={newPlaceState.description}
          onChange={textChange}
        />
        <S.RatingForm>
          <Typography component="legend">Categorization</Typography>
          <Rating
            name="Categorization"
            value={newPlaceState.categorization}
            onChange={numberChange}
          />
        </S.RatingForm>
        <TypeOfAccommodationComponent
          required
          setType={setType}
        />
        <TextField
          required
          type="number"
          label="personCount"
          name="personCount"
          variant="outlined"
          value={newPlaceState.personCount}
          onChange={numberChange}
        />
        <TextField
          required
          type="number"
          name="Price"
          label="Price"
          variant="outlined"
          value={newPlaceState.price}
          onChange={numberChange}
        />
        <TextField
          required
          type="text"
          label="Location"
          name="location"
          variant="outlined"
          value={newPlaceState.location}
          onChange={textChange}
        />
        <TextField
          required
          type="text"
          label="Postal code"
          name="postal"
          variant="outlined"
          value={newPlaceState.postalCode}
          onChange={textChange}
        />
        <TextField
          required
          type="text"
          label="Listing image URL"
          name="url"
          variant="outlined"
          value={newPlaceState.imageUrl}
          onChange={textChange}
        />
        <FormControlLabel
          value="start"
          control={
            <Switch
              color="primary"
              value={newPlaceState.cancellation}
              onChange={toggleChange}
            />
          }
          label="Free cancellation available"
          labelPlacement="start"
          sx={{
            justifyContent: "space-between",
            width: "98%",
          }}
        />
        <Button
          type="submit"
          sx={{ backgroundColor: "#40E0D0", color: "white", alignSelf: "end" }}
          className="button-add-new-place"
        >
          {props.FormData == null ? "ADD NEW PLACE" : "FINISH EDIT"}
        </Button>
      </S.NewPlaceForm>
    </S.NewPlaceFormWrap>
  );
};

export default NewPlacForm;
