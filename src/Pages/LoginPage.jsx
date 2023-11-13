import Login from "../ui/Login";
import Logo from "../ui/Logo";

function LoginPage() {
  const backgroundStyle = {
    backgroundImage: `url(Market.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };
  return (
    <div style={backgroundStyle}>
      <div className="backdrop-blur-sm ">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
