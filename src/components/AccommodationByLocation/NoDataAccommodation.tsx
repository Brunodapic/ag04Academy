import MainWrapp from "../MainWrapp/MainWrapp";
import AdvancedSearch from "../Search/AdvancedSearch";

export default function NoDataAccommodation() {
  const SearchResult = (data: any) => {
    console.log(data);
  };

  return (
    <MainWrapp>
      <div style={{ width: "100%" }}>
        <h2>Homes guests love</h2>
        <AdvancedSearch SearchResult={SearchResult} data={null} />
      </div>
    </MainWrapp>
  );
}
