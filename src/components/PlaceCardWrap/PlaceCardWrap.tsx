import PlaceCardElement from "./PlaceCardElement/PlaceCardElement";
import "./style.css";
import TreeHouse from "../../images/TreeHouse.jpeg";
import ModernHouse from "../../images/ModernHouse.png";
import { Button } from "@mui/material";
import FullAccommodationDetailsProps from "../../models/accommodationModel";
import { useEffect } from "react";

export default function PlaceCardWrap(props: {
  toggleSetFormAdd: () => void;
  setFormData:(data:any)=>void;
  allAccommodations:FullAccommodationDetailsProps[];
  removeAccFromList:(accommodation:FullAccommodationDetailsProps)=>void
}) {

  useEffect(() => {
    console.log(props.allAccommodations)
  }, [props.allAccommodations]);

  const editForm= (data:FullAccommodationDetailsProps)=>{
    props.setFormData(data)
    props.toggleSetFormAdd()
  }

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
          removeAccFromList={props.removeAccFromList}
        />
      );
    }
    return content;
  };

  return (
    <div className="plac-card-wrap">
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
  );
}
