import * as React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";


export default function NavigationBar() {
  let navigate = useNavigate();

  return (
    <div className="NavigationBarDiv">
      <div>
        <h2 className="pointer" onClick={()=>{navigate('/')}}>Staycation</h2>
      </div>
      <div className="NavigationBarRoutes">
          <h4 className="NavigationBarLink pointer" onClick={()=>{navigate('/locations')}}>
            Locations
          </h4>
          <h4 className="NavigationBarLink pointer" onClick={()=>{navigate('/MyPlaces')}}>
            My Places
          </h4>
          <h4 className="NavigationBarLink pointer" onClick={()=>{navigate('/MyBookings')}} >
            My Bookings
          </h4>
      </div>
      <div>
        <h4 className="NavigationBarLogout pointer">Logout</h4>
      </div>
    </div>
  );
}
