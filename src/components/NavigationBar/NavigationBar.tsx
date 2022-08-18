import "./style.css";
import { useNavigate, useParams } from "react-router-dom";

export default function NavigationBar() {
  let navigate = useNavigate();
  

  return (
    <div className="navigation-bar-div">
      <div>
        <h2
          className="pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Staycation
        </h2>
      </div>
      <div className="navigation-bar-routes">
        <h4
          className="pointer"
          onClick={() => {
            navigate("/locations");
          }}
        >
          Locations
        </h4>
        <h4
          className="pointer"
          onClick={() => {
            navigate("/MyPlaces");
          }}
        >
          My Places
        </h4>
        <h4
          className="pointer"
          onClick={() => {
            navigate("/MyBookings");
          }}
        >
          My Bookings
        </h4>
      </div>
      <div>
        <h4 className="pointer">Logout</h4>
      </div>
    </div>
  );
}
