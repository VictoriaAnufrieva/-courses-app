export default function Login() {
    return (
        <div>
            <h3>Lpogin</h3>
            <form onSubmit={addUser}>
        
        <Input
          name="email"
          placeholderText="Enter email"
          labelText="Email"
        />
        <Input
          name="password"
          placeholderText="Enter password"
          labelText="Password"
        />
        <Button buttonText="Login" />
      </form>
      <p>
        If you not have an account you can
        <Link to="/registration">Registration</Link>
      </p>
    </div>
    )
}
