import { useQuery } from "@tanstack/react-query";
import { getSmartPhoneData } from "../../services/storeServices";

function useSmartPhone() {
  const { data: smartPhones, status } = useQuery({
    queryKey: ["smartphones"],
    queryFn: getSmartPhoneData,
  });
  return { smartPhones, status };
}

export default useSmartPhone;
