import AccommodationCardWrap from "../../components/AccommodationWrap/AccommodationCardWrap";
import CityCardWrap from "../../components/CityCardWrap/CityCardWrap";
import DisplayHeader from "../../components/DisplayHeader/DisplayHeader";
import MainWrapp from "../../components/MainWrapp/MainWrapp";


export default function Home() {
  return (
    <div>
      <MainWrapp>
        <DisplayHeader />
        <CityCardWrap location={""} header={true} limit={5}/>
        <AccommodationCardWrap />
      </MainWrapp>
    </div>
  );
}
