import * as React from "react";
import './style.css'

export default function NavigationBar() {
  return (
    <div className="NavigationBarDiv">
      <div>
        <h2 className="pointer">Staycation</h2>
      </div>
      <div className="NavigationBarRoutes">
        <h4 className="NavigationBarLink pointer">Location</h4>
        <h4 className="NavigationBarLink pointer">My Places</h4>
        <h4 className="NavigationBarLink pointer">My Booking</h4>
      </div>
      <div><h4 className="NavigationBarLogout pointer">Logout</h4></div>
    </div>
  );
}
