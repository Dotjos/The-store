import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/Authentication";

export function useUser() {
  const { data: user, status } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { user, status, isAuthenticated: user?.role === "authenticated" };
}
