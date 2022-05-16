import { Link, useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

export default function Login() {
    const navigate = useNavigate()
    function loginUser(event) {
        event.preventDefault();
        const form = event.target;
        const userData = {
          email: form.email.value,
          password: form.password.value,
        };
        console.log(userData);
        fetch("http://localhost:4000/login", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            window.localStorage.setItem('token', data.result)

            event.target.reset();
            navigate("/courses");
          })
          .catch((error) => console.log(error));
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
