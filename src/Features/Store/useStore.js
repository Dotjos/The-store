import { useQuery } from "@tanstack/react-query";
import { getStoreProducts } from "../../services/storeServices";

export function useStore() {
  const { data: products, status } = useQuery({
    queryKey: ["products"],
    queryFn: getStoreProducts,
  });
  return { products, status };
}
