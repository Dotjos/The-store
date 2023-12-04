import { useQuery } from "@tanstack/react-query";
import { getGroceriesData } from "../../services/storeServices";

function useGroceries() {
  const { data: Groceries, status } = useQuery({
    queryKey: ["groceries"],
    queryFn: getGroceriesData,
  });
  return { Groceries, status };
}

export default useGroceries;
