import React, { useState } from "react";
import { AddReservationDtoProperties } from "../../data/ApiInterface";
import PopUpWrap from "../PopUp/PopUpWrap";
import ReservationCard from "./ReservationCard";
import ReservationForm from "./ReservationForm";
import * as S from "./ReservationStyledComponent";
import axios from "axios";
export interface reservationFormInterface {
  name: string;
  email: string;
  number: number;
  checkIn: string;
  checkOut: string;
}

export default function Reservation({
  FullAccommodationDetails,
  SetBookStay,
}: {
  FullAccommodationDetails: any | null;
  SetBookStay: (toggle: boolean) => void;
}) {
  const [confirmationToggle, setConfirmationToggle] = useState(false);
  const [formData, setFormData] = useState<AddReservationDtoProperties>();

  const togglePopUp = () => {
    setConfirmationToggle(!confirmationToggle);
  };

  const toggleConfirmationTask = () => {
    SetBookStay(false);
    var sendData = {
      email: formData?.email,
      personCount: Number(formData?.personCount),
      checkIn: formData?.checkIn,
      checkOut: formData?.checkOut,
      confirmed: true,
      //id:FullAccommodationDetails.id,
      accomodationId: FullAccommodationDetails.id,
    };
    //nisam jos shvatio koji je tocno url za rezervaciju
    console.log(sendData);
    axios
      .post("https://devcademy.herokuapp.com/api/Reservation", {
        headers: {
          "Content-Type": "application/json",
          "accept": "*/*"
        },
        sendData,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setFormData(undefined);
  };

  const getDataFromForm = (data: AddReservationDtoProperties) => {
    togglePopUp();
    setFormData(data);
  };

  return (
    <S.ReservationComponent>
      {confirmationToggle ? (
        <PopUpWrap
          togglePopUp={togglePopUp}
          toggleConfirm={toggleConfirmationTask}
          AccommodationData={FullAccommodationDetails}
          FormData={formData}
        />
      ) : (
        <>
          <ReservationForm getDataFromForm={getDataFromForm} />
          <ReservationCard
            FullAccommodationDetails={FullAccommodationDetails}
          />
        </>
      )}
    </S.ReservationComponent>
  );
}
