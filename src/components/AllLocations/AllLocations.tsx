import { useState } from "react";
import SimpleSearch from "../../components/Search/SimpleSearch";
import CityCardWrap from "../CityCardWrap/CityCardWrap";
import MainWrapp from "../MainWrapp/MainWrapp";

export default function AllLocations() {
  
  const [location, setLocation] = useState("");
  const [haveLocation, seHavetLocation] = useState(false);


  const SimpleSearchResult = (data: string) => {
    setLocation(data)
    if(data.trim() ==""){
      seHavetLocation(false)

    }
    seHavetLocation(true)
    console.log(data);
  };
  
  return (
    <MainWrapp>
      <h2>All Locations</h2>
      <SimpleSearch  SimpleSearchResult={SimpleSearchResult} />
      <CityCardWrap header={false} location={location} />
    </MainWrapp>
  );
}
