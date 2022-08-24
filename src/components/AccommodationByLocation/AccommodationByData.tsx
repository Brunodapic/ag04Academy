import AccommodationCardWrap from "../AccommodationWrap/AccommodationCardWrap";

const AccommodationByData: React.FC<{
  location: any;
  data: any;
}> = (props) => {

  return (
    <div style={{ width: "100%" }}>
      <h2>Stays in {props.location}</h2>
      <AccommodationCardWrap AdvancedSearchData={props.data.state.data}/>
    </div>
  );
};

export default AccommodationByData;
