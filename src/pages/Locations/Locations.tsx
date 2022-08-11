import { useLocation, useParams } from "react-router-dom";
import AccommodationByLocation from "../../components/AccommodationByLocation/AccommodationByLocation";
import AllLocations from "../../components/AllLocations/AllLocations";

export default function Locations(props: { byLocation: boolean }) {
  const data = useLocation();
  //var dataSend = data.state as accommodationFormInterface;
  const { location } = useParams();
  
  return (
    <div>
      {props.byLocation ? <AllLocations /> : <AccommodationByLocation location={location} data={data} /> }
    </div>
  );
}
