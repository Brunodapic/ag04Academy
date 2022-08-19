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

  const {
    cancel: CityCancel,
    data: citys,
    error: CityError,
    loaded: CitysLoaded,
  } = useAxios("Location", "GET");

  const GetIDlocation = (location: string, array: any[] | null) => {
    if (array != null) {
      let cityID = array.find((city) => city.name === location);
      return cityID;
    } else {
      console.log("array null");
      return "none";
    }
  };

  const toggleSetFormAdd = () => {
    setFormAdd(!formAdd);
  };

  const sendFrom = (data: any, edit: boolean, id: string) => {
    console.log(data,formData)
    var Location_ID = GetIDlocation(data.location, citys);
    if (Location_ID) {
      var sendData:any = {
        title: data.title,
        subtitle: data.shortDescription,
        description: data.description,
        shortDescription: data.shortDescription,
        type: data.type,
        categorization: data.categorization,
        personCount: data.personCount,
        imageUrl: data.imageUrl,
        freeCancelation: data.freeCancelation,
        price: data.price,
        locationID: Location_ID.id,
        location: {
          name: Location_ID.name,
          imageUrl: Location_ID.imageUrl,
          postalCode: Location_ID.postalCode,
          properties: Location_ID.properties,
        },
        capacity: data.personCount,
      };
    } else {
      sendData = {
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
        locationID: formData?.locationID, //"3fa85f64-5717-4562-b3fc-2c963f66afa6",
        location: formData?.locationID,
        capacity: data.capacity,
      };
    }
    console.log(sendData);
    if (edit) {
      axios
        .put("https://devcademy.herokuapp.com/api/Accomodations/" + id, {
          sendData,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
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
    }

    setSendData(sendData);
  };

  const {
    cancel,
    data: accomodations,
    error,
    loaded: accomodationsLoaded,
  } = useAxios("Accomodations/recommendation", "GET");

  return (
    <MainWrapp>
      {formAdd ? (
        <NewPlacForm
          FormData={formData}
          toggleSetFormAdd={toggleSetFormAdd}
          sendFrom={sendFrom}
          setFormData={setFormData}
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

/*

location: {
        name: data.location,
        imageUrl: data.imageUrl,
        postalCode: Location_ID.postalCode,
        properties: Location_ID.properties,
      },

*/
