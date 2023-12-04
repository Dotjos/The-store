import { useMutation } from "@tanstack/react-query";
import { signOut } from "../../services/Authentication";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function useSignOut() {
  const navigate = useNavigate();
  const { mutate, status } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      toast.success("Sign Out successful.");
      navigate("/");
    },
    onError: () => {
      toast.error("Error signing out");
    },
  });
  return { mutate, status };
}

export default useSignOut;
