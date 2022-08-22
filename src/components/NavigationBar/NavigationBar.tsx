import "./style.css";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  let navigate = useNavigate();
  const login = localStorage.getItem("login");
  console.log(login);

  const logout = () => {
    console.log("logout");
    localStorage.clear();
    navigate("/login");
  };

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
            (login && navigate("/locations"));
          }}
        >
          Locations
        </h4>
        <h4
          className="pointer"
          onClick={() => {
            (login && navigate("/my-places"));
          }}
        >
          My Places
        </h4>
        <h4
          className="pointer"
          onClick={() => {
            (login && navigate("/my-bookings"));
          }}
        >
          My Bookings
        </h4>
      </div>
      <div>
        {login ? (
          <h4
            className="pointer"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </h4>
        ) : (
          <h4
            className="pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </h4>
        )}
      </div>
    </div>
  );
}
