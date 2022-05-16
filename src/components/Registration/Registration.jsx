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
    fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
        navigate("/login");
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <h3>Registration</h3>
      <form onSubmit={addUser}>
        <Input
          required
          name="userName"
          placeholderText="Enter name"
          labelText="Name"
          minLength="2"
        />
        <Input
          required
          name="email"
          placeholderText="Enter email"
          labelText="Email"
          type="email"
        />
        <Input
          required
          name="password"
          placeholderText="Enter password"
          labelText="Password"
          type="password"
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
