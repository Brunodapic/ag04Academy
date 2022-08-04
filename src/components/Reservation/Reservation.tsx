import * as React from "react";
import ReservationCard from "./ReservationCard";
import ReservationForm from "./ReservationForm";
import * as S from "./ReservationStyledComponent";
import FullAccommodationDetailsProps from "../../models/accommodationModel";

export interface reservationFormInterface {
  name: string;
  email: string;
  number: number;
  checkIn: string;
  checkOut: string;
}

export default function Reservation({
  FullAccommodationDetails,
}: {
  FullAccommodationDetails: FullAccommodationDetailsProps;
}) {
  const getDataFromForm = (data: reservationFormInterface) => {
    console.log(data);
  };

  return (
    <S.ReservationComponent>
      <ReservationForm getDataFromForm={getDataFromForm} />
      <ReservationCard FullAccommodationDetails={FullAccommodationDetails} />
    </S.ReservationComponent>
  );
}
