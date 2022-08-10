import PlaceCardElement from "./PlaceCardElement/PlaceCardElement";
import "./style.css";
import PlaceCardData from "../../data/PlaceCardData.json";
import TreeHouse from "../../images/TreeHouse.jpeg";
import ModernHouse from "../../images/ModernHouse.png";
import { Button } from "@mui/material";
import NewPlacForm from "../NewPlaceForm/NewPlaceForm";


export default function PlaceCardWrap(props: {
  toggleSetFormAdd: () => void;
  setFormData:(data:any)=>void;
}) {

  const editForm= (data:any)=>{
    console.log(data)
    props.setFormData(data)
    props.toggleSetFormAdd()
  }

  const COUNT = 2;
  const getCards = (count: number) => {
    let content = [];
    for (let i = 0; i < count; i++) {
      content.push(
        <PlaceCardElement
          key={i}
          title={PlaceCardData[i % 2].title}
          location={PlaceCardData[i % 2].location}
          subtitle={PlaceCardData[i % 2].subtitle}
          image={i % 2 === 0 ? TreeHouse : ModernHouse}
          editForm={editForm}
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
