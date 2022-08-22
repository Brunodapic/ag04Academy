import { useNavigate } from "react-router-dom";
import MainWrapp from "../../components/MainWrapp/MainWrapp";
import LoginComponent from "../../components/Login/Login";

export default function LoginPage() {
  let navigate = useNavigate();
  

  return (
    <MainWrapp >
        <LoginComponent />
    </MainWrapp>
  );
}
