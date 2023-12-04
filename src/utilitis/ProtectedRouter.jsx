import { useNavigate } from "react-router";
import { useUser } from "./useUser";
import { useEffect } from "react";
import BigSpinner from "../ui/BigSpinner";

function ProtectedRouter({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, status } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && status !== "pending") navigate("/");
    },
    [isAuthenticated, status, navigate]
  );

  if (status === "pending") return <BigSpinner />;
  if (isAuthenticated) return children;
}

export default ProtectedRouter;
