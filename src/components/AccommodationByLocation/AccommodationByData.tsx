import AdvancedSearch from "../../components/Search/AdvancedSearch";

const AccommodationByData: React.FC<{
  location: any;
  data: any;
}> = (props) => {
  const SearchResult = (data: any) => {
    console.log(data);
  };

  return (
    <div style={{ width: "100%" }}>
      <h2>Stays in {props.location}</h2>
      <AdvancedSearch SearchResult={SearchResult} data={props.data} />
    </div>
  );
};

export default AccommodationByData;
