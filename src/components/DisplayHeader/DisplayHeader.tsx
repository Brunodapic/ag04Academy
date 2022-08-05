import "./style.css";
import image from "../../images/header.png";
import AccommodationSearch from "../Search/AccommodationSearch";
import accommodationFormInterface from "../../models/typeOfAccommodation";

export default function DisplayHeader() {
  const AccommodationSearchResult = (data: accommodationFormInterface) => {
    console.log(data);
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
