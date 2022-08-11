import MainWrapp from "../../components/MainWrapp/MainWrapp";
import AccommodationByData from "./AccommodationByData";
import NoDataAccommodation from "./NoDataAccommodation";

const AccommodationByLocation: React.FC<{
  location: any;
  data: any;
}> = (props) => {

  return (
    <MainWrapp>
      {/* ako ima lokacija u url-u i ima podataka samo se onda generira AdvancedSearch s nadopunjenima podatcima   */}
      {props.location && props.data.state ? (
        <AccommodationByData location={props.location} data={props.data} />
      ) : (
        <NoDataAccommodation />
      )}
    </MainWrapp>
  );
};

export default AccommodationByLocation;
