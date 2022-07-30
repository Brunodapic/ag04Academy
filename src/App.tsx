import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Locations from "./pages/Locations/Locations";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/favorites" element={<Favorites />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
<FullAccommodationComponentWrap FullAccommodationDetails={FullAccommodationDetails} />
*/
