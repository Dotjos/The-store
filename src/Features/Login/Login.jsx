import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";
import Spinner from "../../ui/MiniSpinner";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, status } = useLogin();
  let isLoading;
  if (status === "pending") isLoading = true;

  function handleEmail(email) {
    setEmail(email);
  }

  function handlePassword(password) {
    setPassword(password);
  }
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };
  return (
    <>
      <form className="grid grid-cols-1" onSubmit={handleLoginSubmit}>
        <h1 className="text-center font-bold text-lg lg:text-xl">LOGIN</h1>
        <Input
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          type="email"
          disabled={isLoading}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePassword}
          disabled={isLoading}
        />
        <Button type="submit">{isLoading ? <Spinner /> : "Login"}</Button>
      </form>
    </>
  );
}

export default Login;
