import AccommodationByData from "./AccommodationByData";
import NoDataAccommodation from "./NoDataAccommodation";

const AccommodationByLocation: React.FC<{
  location: any;
  data: any;
}> = (props) => {

  return (
    <>
      {props.location && props.data ? (
        <AccommodationByData location={props.location} data={props.data} />
      ) : (
        <NoDataAccommodation />
      )}
    </>
  );
};

export default AccommodationByLocation;
