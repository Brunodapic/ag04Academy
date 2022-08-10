import { useState } from "react";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import NewPlacForm from "../../components/NewPlaceForm/NewPlaceForm";
import PlaceCardWrap from "../../components/PlaceCardWrap/PlaceCardWrap";

export default function MyPlaces() {

  const [formAdd,setFormAdd]= useState(false)
  const [formData,setFormData]= useState()

  const toggleSetFormAdd=()=>{
    setFormAdd(!formAdd)
  }

  return (
    <MainWrapp>
      {formAdd?
      <NewPlacForm data={formData} toggleSetFormAdd={toggleSetFormAdd}/>
      :
      <PlaceCardWrap toggleSetFormAdd={toggleSetFormAdd} setFormData={setFormData}/>
      }
    </MainWrapp>
  );
}
