import { useQuery } from "@tanstack/react-query";
import { getJewelryData } from "../../services/storeServices";

export function useJewelry() {
  const { data: jewelries, status } = useQuery({
    queryKey: ["Jewelries"],
    queryFn: getJewelryData,
  });
  return { status, jewelries };
}
