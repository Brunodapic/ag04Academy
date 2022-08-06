import DisplayFooter from "../../components/DisplayFooter/DisplayFooter";
import AdvancedSearch from "../../components/Search/AdvancedSearch";
import SimpleSearch from "../../components/Search/SimpleSearch";

export default function Locations() {
  //ovdje sam stavio ostala dva Search forma za lakši pregled
  // zato je i data any
  const SearchResult = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h2>All Locations</h2>
      <SimpleSearch SearchResult={SearchResult} />
      <AdvancedSearch SearchResult={SearchResult} />
    </div>
  );
}
