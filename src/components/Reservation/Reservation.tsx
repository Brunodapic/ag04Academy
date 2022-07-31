import * as React from "react";
import ReservationCard from "./ReservationCard";
import ReservationForm from "./ReservationForm";
import * as S from "./ReservationStyledComponent";
import FullAccommodationDetailsProps from "../../models/accommodationModel";

export default function Reservation({
  FullAccommodationDetails,
}: {
  FullAccommodationDetails: FullAccommodationDetailsProps;
}) {
  return (
    <S.ReservationComponent>
      <ReservationForm />
      <ReservationCard FullAccommodationDetails={FullAccommodationDetails} />
    </S.ReservationComponent>
  );
}
