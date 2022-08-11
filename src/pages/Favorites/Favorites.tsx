import { useLocation, useParams } from "react-router-dom";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import AdvancedSearch from "../../components/Search/AdvancedSearch";

export default function Favorites() {
  const data = useLocation();
  //var dataSend = data.state as accommodationFormInterface;
  const { location } = useParams();
  const SearchResult = (data: any) => {
    console.log(data);
  };
  return (
    <MainWrapp>
      {/* ako ima lokacija u url-u i ima podataka samo se onda generira AdvancedSearch s nadopunjenima podatcima   */}
      {location && data.state? (
        <div style={{ width: "100%" }}>
          <h2>Stays in {location}</h2>
          <AdvancedSearch SearchResult={SearchResult} data={data} />
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <h2>Homes guests love</h2>
          <AdvancedSearch SearchResult={SearchResult} data={null} />
        </div>
      )}
    </MainWrapp>
  );
}
