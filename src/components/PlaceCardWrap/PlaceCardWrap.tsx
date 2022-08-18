import PlaceCardElement from "./PlaceCardElement/PlaceCardElement";
import "./style.css";
import TreeHouse from "../../images/TreeHouse.jpeg";
import ModernHouse from "../../images/ModernHouse.png";
import { Button } from "@mui/material";
import FullAccommodationDetailsProps from "../../models/accommodationModel";
import { useEffect, useState } from "react";
import PopUpWrap from "../PopUp/PopUpWrap";

export default function PlaceCardWrap(props: {
  toggleSetFormAdd: () => void;
  setFormData: (data: FullAccommodationDetailsProps) => void;
  allAccommodations: FullAccommodationDetailsProps[] | any[];
}) {
  const [popUpToggle, setPopUpToggle] = useState(false);
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
  };

  const COUNT = props.allAccommodations.length;
  const getCards = (count: number) => {
    let content = [];
    for (let i = 0; i < count; i++) {
      content.push(
        <PlaceCardElement
          key={i}
          PlaceCardData={props.allAccommodations[i % COUNT]}
          image={i % 2 === 0 ? TreeHouse : ModernHouse}
          editForm={editForm}
          setPopUpToggle={setPopUpToggle}
          popUpToggle={popUpToggle}
        />
      );
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

        <div className="plac-card-wrap-gallery">{getCards(COUNT)}</div>
      </div>
    </>
  );
}
