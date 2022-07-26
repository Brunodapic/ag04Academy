import { useState } from "react";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import NewPlacForm from "../../components/NewPlaceForm/NewPlaceForm";
import PlaceCardWrap from "../../components/PlaceCardWrap/PlaceCardWrap";
import { AccommodationCardsListData } from "../../data/AccommodationCardsListData";
import FullAccommodationDetailsProps from "../../models/accommodationModel";

export default function MyPlaces() {
  const [formAdd, setFormAdd] = useState(false);
  const [formData, setFormData] = useState<FullAccommodationDetailsProps>();

  const [allAccommodations, setAllAccommodations] = useState<
    FullAccommodationDetailsProps[]
  >(AccommodationCardsListData);


  const toggleSetFormAdd = () => {
    setFormAdd(!formAdd);
  };

  return (
    <MainWrapp>
      {formAdd ? (
        <NewPlacForm
          FormData={formData}
          toggleSetFormAdd={toggleSetFormAdd}
        />
      ) : (
        <PlaceCardWrap
          allAccommodations={allAccommodations}
          toggleSetFormAdd={toggleSetFormAdd}
          setFormData={setFormData}
        />
      )}
    </MainWrapp>
  );
}
