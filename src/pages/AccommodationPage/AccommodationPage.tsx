import * as React from "react";
import FullAccommodationComponentWrap from "../../components/FullAccommodationComponent/FullAccommodationComponentWrap";
import FullAccommodationDetails from "../../data/AccommodationDetailsData.json";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import DisplayFooter from "../../components/DisplayFooter/DisplayFooter";
import { useState } from "react";
import Reservation from "../../components/Reservation/Reservation";
 
export default function AccommodationPage() {
  const [bookStay, SetBookStay] = useState(false);

  return (
    <div>
      <MainWrapp>
        {bookStay ? (
          <Reservation/>
        ) : (
          <FullAccommodationComponentWrap
            FullAccommodationDetails={FullAccommodationDetails}
            ToggleBookStay={()=>{return SetBookStay(!bookStay);}}
          />
        )}

        <DisplayFooter />
      </MainWrapp>
    </div>
  );
}
