import * as React from "react";
import ReservationCard from "./ReservationCard";
import ReservationForm from "./ReservationForm";
import * as S from './ReservationStyledComponent'

export default function Reservation() {
  return (
    <S.ReservationComponent >
        <ReservationForm />
        <ReservationCard />
    </S.ReservationComponent>
  );
}
