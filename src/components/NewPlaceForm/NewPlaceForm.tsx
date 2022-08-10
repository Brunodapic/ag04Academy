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
import {typeOfAccommodation} from "../../models/typeOfAccommodation";

const newPlaceDefault = {
  listingName: "",
  shortDescription: "",
  longDescription: "",
  categorization: 0,
  typeOfAccommodation: null,
  capacity: 0,
  price: 0,
  location: "",
  postalCode: "",
  imageURL: "",
  cancellation: false,
};

const newPlaceStateReducer = (state: any, action: any) => {
  const type = action.type;
  switch (type) {
    case "CATEGORIZATION_CHANGE":
      return {
        ...state,
        categorization: action.value,
      };
    case "CAPACITY_CHANGE":
      return {
        ...state,
        capacity: action.value,
      };
    case "PRICE_CHANGE":
      return {
        ...state,
        price: action.value,
      };
    case "NAME_CHANGE": {
      return {
        ...state,
        listingName: action.value,
      };
    }
    case "SHORT_CHANGE": {
      return { ...state, shortDescription: action.value };
    }
    case "LONG_CHANGE": {
      return {
        ...state,
        longDescription: action.value,
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
        imageURL: action.value,
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
        typeOfAccommodation: action.value,
      };
    }
    default:
      return newPlaceDefault;
  }
  //iz paranoje imam ovaj return
  return newPlaceDefault;
};

const NewPlacForm: React.FC<{ data: any , toggleSetFormAdd: () => void }> = (
  props
) => {

  console.log(props.data)

  const [typeOfAccommodation, setTypeOfAccommodation] =
    useState<typeOfAccommodation>();

  const [newPlaceState, dispatchNewPlaceState] = useReducer(
    newPlaceStateReducer,
    newPlaceDefault
  );

  useEffect(() => {
    dispatchNewPlaceState({
      type: "TYPEOFACCOMMODATION_CHANGE",
      value: typeOfAccommodation,
    });
  }, [typeOfAccommodation]);

  const numberChange = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "Categorization") {
      dispatchNewPlaceState({
        type: "CATEGORIZATION_CHANGE",
        value: Number(value),
      });
    }
    if (name === "Capacity") {
      dispatchNewPlaceState({ type: "CAPACITY_CHANGE", value: Number(value) });
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


  if(props.data !=null){

  }

  const submitHandle = (event: any) => {
    event.preventDefault();
    console.log(newPlaceState);
    props.toggleSetFormAdd()
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
          value={newPlaceState.listingName}
          onChange={textChange}
        />
        <TextField
          required
          type="text"
          label="Short description"
          name="short"
          variant="outlined"
          value={newPlaceState.shortDescription}
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
          value={newPlaceState.longDescription}
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
          setTypeOfAccommodation={setTypeOfAccommodation}
        />
        <TextField
          required
          type="number"
          label="Capacity"
          name="Capacity"
          variant="outlined"
          value={newPlaceState.capacity}
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
          value={newPlaceState.imageURL}
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
          {props.data==null? "ADD NEW PLACE" : "FINISH EDIT"}
        </Button>
      </S.NewPlaceForm>
    </S.NewPlaceFormWrap>
  );
};

export default NewPlacForm;
