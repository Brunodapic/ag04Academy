import { useLocation, useParams } from "react-router-dom";
import AccommodationByLocation from "../../components/AccommodationByLocation/AccommodationByLocation";
import MainWrapp from "../../components/MainWrapp/MainWrapp";

export default function Favorites() {
  const data = useLocation();
  const { location } = useParams();
  return (
    <MainWrapp>
      <AccommodationByLocation location={location} data={data} />
    </MainWrapp>
  );
}
