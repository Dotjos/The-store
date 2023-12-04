import { useQuery } from "@tanstack/react-query";
import { getClothingData } from "../../services/storeServices";

function useClothing() {
  const { data: clothings, status } = useQuery({
    queryKey: [""],
    queryFn: getClothingData,
  });
  return { clothings, status };
}

export default useClothing;
