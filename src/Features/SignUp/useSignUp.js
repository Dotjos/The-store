import { useMutation } from "@tanstack/react-query";
import { signUpNewUser } from "../../services/Authentication";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUpNew, status } = useMutation({
    mutationFn: ({ userName, password, email, role, shopId }) =>
      signUpNewUser(userName, password, email, role, shopId),
    onSuccess: () => {
      toast.success("Check your email for the verification link.");
    },
    onError: (error) => {
      console.error("Sign-up error:", error);
      toast.error("Check your credentials and internet condition.");
    },
  });
  return { signUpNew, status };
}
