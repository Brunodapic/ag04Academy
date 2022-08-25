import { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import "./App.css";
import DisplayFooter from "./components/DisplayFooter/DisplayFooter";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AccommodationPage from "./pages/AccommodationPage/AccommodationPage";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Locations from "./pages/Locations/Locations";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyBookings from "./pages/MyBookings/MyBookings";
import MyPlaces from "./pages/MyPlaces/MyPlaces";

function App() {
  const login = localStorage.getItem("login");

  useEffect(() => {
    console.log(login)
  }, [login]);

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
          <Route path="/locations" element={login ? <Locations byLocation={true}/> : <Navigate to="/login" replace />}  />
          
          <Route path="/favorites" element={login ?<Favorites />: <Navigate to="/login" replace />} />
          <Route
            path="/favorites"
            element={login ?<Favorites />: <Navigate to="/login" replace />}
          >
            <Route
              path=":location"
              element={login ?<Favorites />: <Navigate to="/login" replace />}
            />
          </Route>

          <Route path="/login" element={<LoginPage />} />

          <Route path="/my-places" element={login ?<MyPlaces />: <Navigate to="/login" replace />} />
          <Route path="/my-bookings" element={login ?<MyBookings />: <Navigate to="/login" replace />} />
          <Route path="/accommodation" element={login ?<AccommodationPage />: <Navigate to="/login" replace />}>
            <Route
              path="/accommodation:AccommodationID"
              element={login ?<AccommodationPage />: <Navigate to="/login" replace />}
            />
          </Route>
        </Routes>
        <DisplayFooter />
      </Router>
    </div>
  );
}

export default App;
