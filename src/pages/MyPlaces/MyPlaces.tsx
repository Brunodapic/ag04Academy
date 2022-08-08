import { useState } from "react";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import NewPlacForm from "../../components/NewPlaceForm/NewPlaceForm";
import PlaceCardWrap from "../../components/PlaceCardWrap/PlaceCardWrap";

export default function MyPlaces() {

  const [formAdd,setFormAdd]= useState(false)

  const toggleSetFormAdd=()=>{
    setFormAdd(!formAdd)
  }

  return (
    <MainWrapp>
      {formAdd?
      <NewPlacForm NewPlaceFormUse={function (data: string): void {} } />
      :
      <PlaceCardWrap toggleSetFormAdd={toggleSetFormAdd}/>
      }
    </MainWrapp>
  );
}
