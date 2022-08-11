import SimpleSearch from "../../components/Search/SimpleSearch";

export default function AllLocations() {
  
  const SearchResult = (data: any) => {
    console.log(data);
  };
  
  return (
    <div>
      <h2>All Locations</h2>
      <SimpleSearch SearchResult={SearchResult} />
    </div>
  );
}
