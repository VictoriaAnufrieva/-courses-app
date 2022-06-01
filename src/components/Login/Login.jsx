import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { fetchLogIn } from "../../services";
import { logIn } from "../../store/user/actionCreators";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function loginUser(event) {
    event.preventDefault();
    const form = event.target;
    const userData = {
      email: form.email.value,
      password: form.password.value,
    };
    fetchLogIn(userData).then((data) => {
      console.log(data);
      dispatch(logIn({ token: data.result, ...data.user }));
      window.localStorage.setItem("token", data.result);
      event.target.reset();
      navigate("/courses");
    });

    console.log(userData);
  }
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={loginUser}>
        <Input
          required
          name="email"
          placeholderText="Enter email"
          labelText="Email"
          type="email"
        />
        <Input
          name="password"
          placeholderText="Enter password"
          labelText="Password"
          required
          type="password"
        />
        <Button buttonText="Login" />
      </form>
      <p>
        If you not have an account you can
        <Link to="/registration">Registration</Link>
      </p>
    </div>
  );
}
