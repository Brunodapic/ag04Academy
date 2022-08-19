import FullAccommodationComponentWrap from "../../components/FullAccommodationComponent/FullAccommodationComponentWrap";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import { useState } from "react";
import Reservation from "../../components/Reservation/Reservation";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

export default function AccommodationPage() {
  const [bookStay, SetBookStay] = useState(false);
  const { AccommodationID } = useParams();

  const {
    data: accommodation,
    loaded: accommodationLoaded,
  } = useAxios(`Accomodations/${AccommodationID}`, "GET");

  const FullAccommodationDetailsProp = {
    id: "420c8f32-8dc5-4242-b2de-e8cc701d32b1",
    title: "Villa Kampanel",
    subtitle: null,
    description:
      "This property is 1 minute walk from the beach.25 m away from the town's sandy beaches. It has a sun terrace and offers air-conditioned apartments with balconies and views of the Adriatic Sea.Apartments feature a living area with a flat-screen TV and satellite channels. They are bright and come equipped with free Wi-Fi and a modern kitchen with a dining area.The villa is a 5-minute walk from bars and restaurants offering fresh seafood. Historical monuments are only 3 km away.",
    shortDescription:
      "Boasting a spa bath, Tirkizni VAL is situated in Zadar. The air-conditioned accommodation is 650 m from Diklovac Beach, and guests benefit from private parking available on site and free WiFi.",
    type: "Room",
    categorization: 5,
    personCount: null,
    imageUrl:
      "https://croatia.blob.core.windows.net/images/hedera--a13-0027.jpg",
    freeCancelation: false,
    price: 1600,
    location: {
      id: "aeba9cc9-384f-4e4f-a018-2e52ba8b2ce9",
      imageUrl:
        "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2020/06/17121029/Trogir-870x400.jpg",
      name: "Trogir",
      postalCode: 21218,
      properties: 11,
    },
    locationID: "aeba9cc9-384f-4e4f-a018-2e52ba8b2ce9",
    capacity: 2,
    postalCode: 21218,
  };

  return (
    <div>
      <MainWrapp>
        {bookStay ? (
          <Reservation
            SetBookStay={SetBookStay}
            FullAccommodationDetails={
              accommodationLoaded ? accommodation : null
            }
          />
        ) : (
          <FullAccommodationComponentWrap
            FullAccommodationDetails={
              accommodationLoaded ? accommodation : FullAccommodationDetailsProp
            }
            ToggleBookStay={() => {
              return SetBookStay(!bookStay);
            }}
          />
        )}
      </MainWrapp>
    </div>
  );
}

