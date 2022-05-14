import { Link, useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

export default function Registration() {
  const navigate = useNavigate();

  function addUser(event) {
    event.preventDefault();
    const form = event.target;
    const newUser = {
      name: form.userName.value,
      email: form.email.value,
      password: form.password.value,
    };
    console.log(newUser);
    event.target.reset();
    navigate("/login");
  }
  return (
    <div>
      <h3>Registration</h3>
      <form onSubmit={addUser}>
        <Input
          name="userName"
          placeholderText="Enter name"
          labelText="Name"
          minLength="2"
        />
        <Input
          name="email"
          placeholderText="Enter email"
          labelText="Email"
          minLength="2"
        />
        <Input
          name="password"
          placeholderText="Enter password"
          labelText="Password"
        />
        <Button buttonText="Registration" />
      </form>
      <p>
        If you have an account you can
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
