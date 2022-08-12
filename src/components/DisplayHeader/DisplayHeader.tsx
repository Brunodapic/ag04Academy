import "./style.css";
import image from "../../images/header.png";
import AccommodationSearch from "../Search/AccommodationSearch";
import {accommodationFormInterface} from "../../models/typeOfAccommodation";
import { useNavigate } from "react-router-dom";

export default function DisplayHeader() {
  let navigate = useNavigate();

  const AccommodationSearchResult = (data: accommodationFormInterface) => {
    navigate(`/locations/homes/${data.location}`,{ state: { data } })
  };

  return (
    <div className="display-header">
      <img className="display-header-image" src={image} alt="Header" />
      <AccommodationSearch
        AccommodationSearchResult={AccommodationSearchResult}
      />
    </div>
  );
}
