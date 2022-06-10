import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import "./Header.css";
import { userSelector } from "../../store/user/selectors";
import { fetchSignOut } from "../../store/user/thunk";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(userSelector);

  useEffect(() => {
    // const savedToken = localStorage.getItem("token");
    // setToken(savedToken);
    const loginRoutes = ["/login", "/registration"];
    const inLoginRoute = loginRoutes.some((loginRoute) =>
      location.pathname.includes(loginRoute)
    );
    if (inLoginRoute && user.token) {
      navigate("/courses");
      return;
    }
    if (!inLoginRoute && !user.token) {
      navigate("/login");
      return;
    }
  }, [location, navigate, user]);

  function logOutUser() {
    dispatch(fetchSignOut());
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className="header">
      <Logo />

      {user.isAuth && (
        <div className="login">
          <p>{user.name || "Admin"}</p>
          <Button buttonText="Logout" onClick={logOutUser} />
        </div>
      )}
    </header>
  );
}
