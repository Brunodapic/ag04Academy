import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AccommodationPage from "./pages/AccommodationPage/AccommodationPage";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Locations from "./pages/Locations/Locations";
import MyBookings from "./pages/MyBookings/MyBookings";
import MyPlaces from "./pages/MyPlaces/MyPlaces";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/MyPlaces" element={<MyPlaces />} />
          <Route path="/MyBookings" element={<MyBookings />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
            <Route path=":accommodationID" element={<AccommodationPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
<FullAccommodationComponentWrap FullAccommodationDetails={FullAccommodationDetails} />
*/
