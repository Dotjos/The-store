import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" p-7 w-11/12  bg-slate-400 rounded-md">
        <div className=" lg:flex lg:justify-around lg:items-center">
          <div className="lg:w-1/2">
            <form className="grid grid-cols-1">
              <h1 className="text-center font-bold text-lg lg:text-xl">
                LOGIN
              </h1>
              <Input placeholder="Email/Username" />
              <Input placeholder="Password" type="password" />
              <label className="font-medium lg:text-xl" htmlFor="role">
                Login as:
              </label>
              <select
                id="role"
                name="role"
                className="p-2 rounded-md outline-0 my-2 lg:text-lg lg:font-medium"
              >
                <option value="seller">Seller</option>
                <option value="buyer">Buyer</option>
              </select>
            </form>
            <Button>Login</Button>
            <p className="mt-1 lg:text-xl">
              Don't have an account yet?
              <Link className="font-bold">Sign up.</Link>
            </p>
          </div>
          <div className="">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Login;

export default Login;
