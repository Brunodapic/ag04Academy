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
      checkIn: new Date(formData ? formData.checkIn:""),
      checkOut: new Date(formData ? formData.checkOut:""),
      confirmed: true,
      accomodationId: FullAccommodationDetails.id,
    };
    axios
      .post("https://devcademy.herokuapp.com/api/Reservation",
        sendData,
      )
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
