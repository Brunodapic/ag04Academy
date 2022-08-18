import PlaceCardElement from "./PlaceCardElement/PlaceCardElement";
import "./style.css";
import TreeHouse from "../../images/TreeHouse.jpeg";
import ModernHouse from "../../images/ModernHouse.png";
import { Button } from "@mui/material";
import FullAccommodationDetailsProps from "../../models/accommodationModel";
import { useEffect, useState } from "react";
import PopUpWrap from "../PopUp/PopUpWrap";
import axios from "axios";

export default function PlaceCardWrap(props: {
  toggleSetFormAdd: () => void;
  setFormData: (data: FullAccommodationDetailsProps) => void;
  allAccommodations: null | any[];
}) {
  const [popUpToggle, setPopUpToggle] = useState(false);
  const [idDelete, setIdDelete] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  const editForm = (data: FullAccommodationDetailsProps) => {
    props.setFormData(data);
    props.toggleSetFormAdd();
  };

  const togglePopUp = () => {
    setPopUpToggle(!popUpToggle);
  };

  const toggleConfirmDelete = () => {
    setConfirmDelete(!confirmDelete);
    axios
      .delete("https://devcademy.herokuapp.com/api/Accomodations/"+idDelete)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getCards = () => {
    let content: JSX.Element[]=[];

    if (props.allAccommodations) {
      props.allAccommodations.map((place) =>{
        content.push(
          <PlaceCardElement
            key={place.id}
            PlaceCardData={place}
            image={place.imageUrl}
            editForm={editForm}
            setPopUpToggle={setPopUpToggle}
            popUpToggle={popUpToggle}
            setIdDelete={setIdDelete}
          />
        );
        })
      
    } else {
      return "Loading..."
    }
    return content;
  };

  return (
    <>
      <div className="plac-card-wrap">
        {popUpToggle && (
          <PopUpWrap
            togglePopUp={togglePopUp}
            toggleConfirm={toggleConfirmDelete}
          />
        )}
        <div className="plac-card-header">
          <h2>My places</h2>
          <Button
            sx={{ backgroundColor: "#40E0D0", color: "white" }}
            className="button-add-new-place"
            onClick={props.toggleSetFormAdd}
          >
            ADD NEW PLACE
          </Button>
        </div>

        <div className="plac-card-wrap-gallery">{getCards()}</div>
      </div>
    </>
  );
}

