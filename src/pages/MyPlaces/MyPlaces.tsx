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

  const addAccToList = (accommodation: FullAccommodationDetailsProps) => {
    setAllAccommodations(() => {
      return [accommodation, ...allAccommodations];
    });
  };

  const removeAccFromList = (accommodation: FullAccommodationDetailsProps) => {
    setAllAccommodations(
      allAccommodations.filter(
        (accommodationInList) =>
          accommodationInList.title !== accommodation.title
      )
    );
  };

  const toggleSetFormAdd = () => {
    setFormAdd(!formAdd);
  };

  return (
    <MainWrapp>
      {formAdd ? (
        <NewPlacForm
          FormData={formData}
          toggleSetFormAdd={toggleSetFormAdd}
          addAccToList={addAccToList}
        />
      ) : (
        <PlaceCardWrap
          allAccommodations={allAccommodations}
          toggleSetFormAdd={toggleSetFormAdd}
          setFormData={setFormData}
          removeAccFromList={removeAccFromList}
        />
      )}
    </MainWrapp>
  );
}
