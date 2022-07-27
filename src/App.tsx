import "./App.css";
import AccommodationCardWrap from "./components/AccommodationWrap/AccommodationCardWrap";
import CityCardWrap from "./components/CityCardWrap/CityCardWrap";
import DisplayFooter from "./components/DisplayFooter/DisplayFooter";
import DisplayHeader from "./components/DisplayHeader/DisplayHeader";
import MainWrapp from "./components/MainWrapp/MainWrapp";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import PlaceCardWrap from "./components/PlaceCardWrap/PlaceCardWrap";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainWrapp>
        <DisplayHeader />
        <CityCardWrap />
        <AccommodationCardWrap />
        <PlaceCardWrap/>
        <DisplayFooter />
      </MainWrapp>
    </div>
  );
}

export default App;
