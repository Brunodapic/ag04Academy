import MainWrapp from "../MainWrapp/MainWrapp";
import AdvancedSearch from "../Search/AdvancedSearch";
import AccommodationCardWrap from "../../components/AccommodationWrap/AccommodationCardWrap";
import { useState } from "react";

export default function NoDataAccommodation() {
  const [filterData, setFilterData] = useState<{
    checkIn: string | undefined;
    checkOut: string | undefined;
    personCount: number | undefined;
    type: string | undefined;
  }>({
    checkIn: undefined,
    checkOut: undefined,
    personCount: undefined,
    type: undefined,
  });

  const SearchResult = (data: any) => {
    setFilterData(data)
  };

  return (
    <MainWrapp>
      <div style={{ width: "100%" }}>
        <h2>Homes guests love</h2>
        <AdvancedSearch SearchResult={SearchResult} data={null} />
      </div>
      <AccommodationCardWrap filterData={filterData}  />
    </MainWrapp>
  );
}
