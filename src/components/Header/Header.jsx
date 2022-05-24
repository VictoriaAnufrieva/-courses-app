import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
    const loginRoutes = ["/login", "/registration"];
    const inLoginRoute = loginRoutes.some((loginRoute) =>
      location.pathname.includes(loginRoute)
    );
    if (inLoginRoute && token) {
        navigate("/courses")
        return
    }
    if (!inLoginRoute && !token) {
        navigate("/login")
        return
    }
  }, [location, navigate, token]);
  function logOut() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className="header">
      <Logo />

      {token && (
        <div className="login">
          <p>Dave</p>
          <Button buttonText="Logout" onClick={logOut} />
        </div>
      )}
    </header>
  );
}
