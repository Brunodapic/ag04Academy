import AdvancedSearch from "../../components/Search/AdvancedSearch";
import AccommodationCardWrap from "../AccommodationWrap/AccommodationCardWrap";

const AccommodationByData: React.FC<{
  location: any;
  data: any;
}> = (props) => {
  const SearchResult = (data: any) => {
    console.log(data);
  };
  console.log(props.data)
  return (
    <div style={{ width: "100%" }}>
      <h2>Stays in {props.location}</h2>
      <AccommodationCardWrap AdvancedSearchData={props.data.state.data}/>
    </div>
  );
};

export default AccommodationByData;
