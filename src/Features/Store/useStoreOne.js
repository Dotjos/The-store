import { useQuery } from "@tanstack/react-query";
import { getStoreProductsOne } from "../../services/storeServices";

export function useStoreOne(id) {
  const { data, status } = useQuery({
    queryKey: ["oneProduct", id],
    queryFn: () => getStoreProductsOne(id),
  });
  return { data, status };
}
