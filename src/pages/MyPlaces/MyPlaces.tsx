import { useState } from "react";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import NewPlacForm from "../../components/NewPlaceForm/NewPlaceForm";
import PlaceCardWrap from "../../components/PlaceCardWrap/PlaceCardWrap";
import { AccommodationCardsListData } from "../../data/AccommodationCardsListData";
import useAxios from "../../hooks/useAxios";
import FullAccommodationDetailsProps from "../../models/accommodationModel";
import axios from "axios";

export default function MyPlaces() {
  const [formAdd, setFormAdd] = useState(false);
  const [formData, setFormData] = useState<FullAccommodationDetailsProps>();
  const [send, setSend] = useState(false);
  const [sendData, setSendData] = useState<any>();
  const [allAccommodations, setAllAccommodations] = useState<
    FullAccommodationDetailsProps[]
  >(AccommodationCardsListData);


  const toggleSetFormAdd = () => {
    setFormAdd(!formAdd);
  };

  const sendFrom = (data: any) => {
    console.log(data);

    var sendData = {
      title: data.title,
      subtitle: "string",
      description: data.description,
      shortDescription: data.shortDescription,
      type: data.type,
      categorization: data.categorization,
      personCount: data.personCount,
      imageUrl: data.imageUrl,
      freeCancelation: data.freeCancelation,
      price: data.price,
      locationID: "",//"3fa85f64-5717-4562-b3fc-2c963f66afa6",
      location: {
        name: data.location,
        imageUrl: "None",
        postalCode: data.postalCode,
        properties: 0,
      },
      capacity: 0,
    };
    console.log(sendData);

    axios
      .post("https://devcademy.herokuapp.com/api/Accomodations", {
        sendData,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setSendData(sendData);
  };


  const {
    cancel,
    data: accomodations,
    error,
    loaded: accomodationsLoaded,
  } = useAxios("Accomodations/recommendation", "GET");


  console.log(accomodations)
  console.log(AccommodationCardsListData)

  return (
    <MainWrapp>
      {formAdd ? (
        <NewPlacForm
          FormData={formData}
          toggleSetFormAdd={toggleSetFormAdd}
          sendFrom={sendFrom}
        />
      ) : (
        <PlaceCardWrap
          allAccommodations={accomodations}
          toggleSetFormAdd={toggleSetFormAdd}
          setFormData={setFormData}
        />
      )}
    </MainWrapp>
  );
}
