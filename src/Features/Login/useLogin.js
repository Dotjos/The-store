import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import toast from "react-hot-toast";
import { signInWithEmail } from "../../services/Authentication";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, status } = useMutation({
    mutationFn: ({ email, password }) => signInWithEmail({ email, password }),
    onSuccess: (user) => {
      toast.success("Login successful.");
      queryClient.setQueriesData(["user", user]);
      navigate("/home", { replace: true });
    },

    onError: () => {
      toast.error("Check your internet connection or credentials.");
    },
  });

  return { login, status };
}
