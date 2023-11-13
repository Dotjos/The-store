import Button from "../ui/Button";
import Input from "../ui/Input";

function SignUp({ onSignUpSubmit }) {
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    onSignUpSubmit();
  };

  return (
    <form className="grid grid-cols-1" onSubmit={handleSignUpSubmit}>
      <h1 className="text-center font-bold text-lg lg:text-xl">
        Create an account
      </h1>
      <Input placeholder="UserName" />
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <label className="font-medium lg:text-xl" htmlFor="role">
        Sign-Up as:
      </label>
      <select
        id="role"
        name="role"
        className="p-2 rounded-md outline-0 my-2 lg:text-lg lg:font-medium"
      >
        <option value="seller">Seller</option>
        <option value="buyer">Buyer</option>
      </select>
      <Button type="submit">Create Account</Button>
    </form>
  );
}

export default SignUp;
