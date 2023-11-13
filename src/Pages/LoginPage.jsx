import { useState } from "react";
import Login from "../ui/Login";
import Logo from "../ui/Logo";
import SignUp from "./SignUp";

function LoginPage() {
  const backgroundStyle = {
    backgroundImage: `url(Market.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div style={backgroundStyle}>
      <div className="backdrop-blur-sm">
        <div className="flex items-center justify-center h-screen">
          <div className="p-7 w-11/12 bg-slate-400 rounded-md">
            <div className="lg:flex lg:justify-around lg:items-center">
              <div className="lg:w-1/2">
                {isSignUp ? <SignUp /> : <Login />}

                <p className="mt-1 lg:text-xl">
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account yet?"}
                  <button className="font-bold" onClick={handleToggleForm}>
                    {isSignUp ? "Login" : "Sign up"}
                  </button>
                </p>
              </div>

              <div>
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
