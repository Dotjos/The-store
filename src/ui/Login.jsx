import Button from "./Button";
import Input from "./Input";

function Login({ onLoginSubmit }) {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    onLoginSubmit();
  };

  return (
    <form className="grid grid-cols-1" onSubmit={handleLoginSubmit}>
      <h1 className="text-center font-bold text-lg lg:text-xl">LOGIN</h1>
      <Input placeholder="Email/Username" />
      <Input placeholder="Password" type="password" />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default Login;
