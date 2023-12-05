import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useSignUp } from "./useSignUp";
import Spinner from "../../ui/MiniSpinner";
import { generateRandomId } from "../../services/generateId";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { signUpNew, status } = useSignUp();
  let isLoading;
  if (status === "pending") isLoading = true;
  function handlePassword(password) {
    setPassword(password);
  }
  function handleUserName(userName) {
    setUserName(userName);
  }
  function handleEmail(email) {
    setEmail(email);
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const shopId = generateRandomId();
    signUpNew(
      { userName, password, email, shopId },
      {
        onSettled: () => {
          setEmail("");
          setUserName("");
          setPassword("");
        },
      }
    );
    // Add your sign-up logic here
  };
  return (
    <form className="grid grid-cols-1" onSubmit={handleSignUpSubmit}>
      <h1 className="text-center font-bold text-lg lg:text-xl">
        Create an account
      </h1>
      <Input
        placeholder="UserName"
        value={userName}
        onChange={handleUserName}
        disabled={isLoading}
      />
      <Input placeholder="Email" value={email} onChange={handleEmail} />
      <Input
        placeholder="Password(6 min characters)"
        type="password"
        onChange={handlePassword}
        value={password}
        disabled={isLoading}
      />

      <Button type="submit">
        {isLoading ? <Spinner /> : "Create Account"}
      </Button>
    </form>
  );
}

export default SignUp;
