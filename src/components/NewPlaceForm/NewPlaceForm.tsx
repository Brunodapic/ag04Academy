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
      return { ...state, shortDescription: action.value };
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
        freeCancelation: !state.freeCancelation,
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
        shortDescription: "",
        description: "",
        categorization: 1,
        type: null,
        personCount: 1,
        price: "",
        location: "",
        postalCode: "",
        imageUrl: "",
        freeCancelation: true,
      };
  }
};

const NewPlacForm: React.FC<{
  FormData: FullAccommodationDetailsProps | undefined;
  toggleSetFormAdd: () => void;
  sendFrom: (data: any) => void;
}> = (props) => {
  const newPlaceDefault = {
    title: props.FormData ? props.FormData.title : "",
    shortDescription: props.FormData ? props.FormData.shortDescription : "",
    description: props.FormData ? props.FormData.description : "",
    categorization: props.FormData ? props.FormData.categorization : 1,
    type: props.FormData ? props.FormData.type : "",
    personCount: props.FormData ? props.FormData.personCount : 1,
    price: props.FormData ? props.FormData.price : "",
    location: props.FormData ? props.FormData.location : "",
    postalCode: props.FormData ? props.FormData.postalCode : "",
    imageUrl: props.FormData ? props.FormData.imageUrl : "",
    freeCancelation: props.FormData ? props.FormData.freeCancelation : true,
  };

  const [type, setType] = useState<typeOfAccommodation>();
  const [nameValidation, setNameValidation] = useState(false);
  const [shortDescriptionValidation, setshortDescriptionValidation] =
    useState(false);
  const [locationValidation, setLocationValidation] = useState(false);

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
    } else if (name === "personCount") {
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
        if (value.length < 100) {
          nameValidation && setNameValidation(false);
          dispatchNewPlaceState({
            type: "NAME_CHANGE",
            value: value,
          });
        } else {
          setNameValidation(true);
        }
        break;
      }
      case "short": {
        if (value.length < 100) {
          nameValidation && setshortDescriptionValidation(false);
          dispatchNewPlaceState({
            type: "SHORT_CHANGE",
            value: value,
          });
        } else {
          setshortDescriptionValidation(true);
        }
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
        if (value.length < 100) {
          locationValidation && setLocationValidation(false);
          dispatchNewPlaceState({
            type: "LOCATION_CHANGE",
            value: value,
          });
        } else {
          setLocationValidation(true);
        }
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

    props.sendFrom(newPlaceState);
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
          error={nameValidation}
          helperText={nameValidation && "max 100 characters"}
          value={newPlaceState.title}
          onChange={textChange}
        />
        <TextField
          required
          type="text"
          label="Short description"
          name="short"
          variant="outlined"
          error={shortDescriptionValidation}
          helperText={shortDescriptionValidation && "max 200 characters"}
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
        <TypeOfAccommodationComponent required setType={setType} />
        <TextField
          required
          type="number"
          label="personCount"
          name="personCount"
          variant="outlined"
          value={newPlaceState.personCount}
          onChange={numberChange}
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
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
          error={locationValidation}
          helperText={locationValidation && "max 150 characters"}
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
              checked={newPlaceState.freeCancelation}
              value={newPlaceState.freeCancelation}
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
          sx={{ backgroundColor: "#40E0D0", color: "white", alignSelf: "end" }}
          className="button-add-new-place"
          onClick={props.toggleSetFormAdd}
        >
          CANCLE
        </Button>
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
