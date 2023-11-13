import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" p-7 w-11/12  bg-slate-400 rounded-md">
        <h1 className="text-center font-bold text-lg">LOGIN</h1>
        <form className="grid grid-cols-1 ">
          <Input placeholder="Email/Username" />
          <Input placeholder="Password" type="password" />
          <label className="font-medium" htmlFor="role">
            Login as:
          </label>
          <select
            id="role"
            name="role"
            className="p-2 rounded-md outline-0 my-2"
          >
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
        </form>
        <Button>Login</Button>
        <p className="mt-1">
          Don't have an account yet?
          <Link className="font-bold">Sign up.</Link>
        </p>
      </div>
    </div>
  );
}

// export default Login;

export default Login;
