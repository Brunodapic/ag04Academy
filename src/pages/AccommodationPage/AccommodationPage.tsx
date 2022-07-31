import * as React from "react";
import FullAccommodationComponentWrap from "../../components/FullAccommodationComponent/FullAccommodationComponentWrap";
import FullAccommodationDetails from "../../data/AccommodationDetailsData.json";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import DisplayFooter from "../../components/DisplayFooter/DisplayFooter";
import { useState } from "react";
import Reservation from "../../components/Reservation/Reservation";
import FullAccommodationDetailsProps from "../../models/accommodationModel"

export default function AccommodationPage() {
  const [bookStay, SetBookStay] = useState(false);

  //nisam siguran dali postoji elegantije rijesenje od ovoga
  const FullAccommodationDetailsProp=FullAccommodationDetails as FullAccommodationDetailsProps
  
  return (
    <div>
      <MainWrapp>
        {bookStay ? (
          <Reservation FullAccommodationDetails={FullAccommodationDetailsProp}/>
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
