import React from "react";
import "./style.css";
import image from "../../images/FullAccommodationComponentHeader.jpeg";
import { Rating } from "@mui/material";
import FullAccComponentSideCard from "./FullAccComponentSideCard/FullAccComponentSideCard";

interface FullAccommodationDetails {
  title: "Poseidon Hotel Suites";
  subtitle: "Stay in the heart of Mýkonos City";
  description: "This property is 3 minutes walk from the beach. Overlooking Mykonos Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos Beach. The 3-star hotel offers a freshwater pool, and bright rooms with air conditioning and fan. Each of the Cycladic rooms opens to a private balcony with across to Mykonos Town, the sea and Delos. A fridge, satellite TV and safe are standard. Free two-way transfer from the airport or port is offered. Poseidon provides free Wi-Fi in public areas, and on-site parking is also free. Guests can hire Poseidon’s motor yacht and discover the magnificent beaches of Mykonos. At the breakfast room and its cool patio, guests can taste homemade local delicacies, fresh fruit and good quality coffee. The Alley Bay serves exclusive cocktails, a few steps from the Poseidon. The Poseidon is just 200 m from the famous Mykonos Windmills. Right next to the hotel, guests will find small sandy coves and a pathway that leads to the picturesque chapel of Agios Charalambis. This is our guests' favourite part of Mýkonos City, according to independent reviews. Couples particularly like the location — they rated it 9.6 for a two-person trip.";
  type: "Room";
  categorization: 5;
  personCount: 2;
  imageUrl: "";
  freeCancelation: true;
  price: 500;
  location: "Mýkonos City";
  postalCode: "846 00";
}

export default function FullAccommodationComponentWrap({
  FullAccommodationDetails,
  ToggleBookStay,
}: {
  FullAccommodationDetails: FullAccommodationDetails | any;
  ToggleBookStay: Function;
}) {
  return (
    <div className="full-accommodation-component-wrap">
      <div className="full-accommodation-component-header">
        <img
          className="full-accommodation-component-header-image"
          src={FullAccommodationDetails.imageUrl? FullAccommodationDetails.imageUrl:image}
          alt="Header of Component"
        />
      </div>
      <div className="full-accommodation-component-info">
        <div className="full-accommodation-component-info-text">
          <div className="full-accommodation-component-info-text-header">
            <div className="full-accommodation-component-info-text-header-top">
              <h2>{FullAccommodationDetails.title}</h2>
              <Rating
                sx={{ paddingTop: "1.5rem", paddingLeft: "1.5rem" }}
                name="read-only"
                value={5}
                readOnly
              />
            </div>
            <div className="full-accommodation-component-info-text-header-bot">
              <h4>{FullAccommodationDetails.subtitle}</h4>
            </div>
          </div>
          <div className="FullAccommodationComponentInfoTextKalendar">
            <h4>Free cancellation available</h4>
          </div>
          <div className="FullAccommodationComponentInfoTextDescription">
            {FullAccommodationDetails.description}
          </div>
        </div>

        <FullAccComponentSideCard
          personCount={FullAccommodationDetails.personCount}
          type={FullAccommodationDetails.type}
          price={FullAccommodationDetails.price}
          location={FullAccommodationDetails.location}
          postalCode={FullAccommodationDetails.postalCode}
          ToggleBookStay={ToggleBookStay}
        />
      </div>
    </div>
  );
}
