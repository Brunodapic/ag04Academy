import FullAccommodationComponentWrap from "../../components/FullAccommodationComponent/FullAccommodationComponentWrap";
import FullAccommodationDetails from "../../data/AccommodationDetailsData.json";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import { useState } from "react";
import Reservation from "../../components/Reservation/Reservation";
import FullAccommodationDetailsProps from "../../models/accommodationModel";

export default function AccommodationPage() {
  const [bookStay, SetBookStay] = useState(false);

  const FullAccommodationDetailsProp =
    FullAccommodationDetails as FullAccommodationDetailsProps;

  return (
    <div>
      <MainWrapp>
        {bookStay ? (
          <Reservation
            FullAccommodationDetails={FullAccommodationDetailsProp}
          />
        ) : (
          <FullAccommodationComponentWrap
            FullAccommodationDetails={FullAccommodationDetails}
            ToggleBookStay={() => {
              return SetBookStay(!bookStay);
            }}
          />
        )}

      </MainWrapp>
    </div>
  );
}
