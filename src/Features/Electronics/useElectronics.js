import { useQuery } from "@tanstack/react-query";
import { getElectronicsData } from "../../services/storeServices";

function useElectronics() {
  const { data: Electronics, status } = useQuery({
    queryKey: ["electronics"],
    queryFn: getElectronicsData,
  });
  return { Electronics, status };
}

export default useElectronics;
