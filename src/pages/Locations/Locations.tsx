import { useParams } from "react-router-dom";
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
    </div>
  );
}
