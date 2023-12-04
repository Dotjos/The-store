import { useQuery } from "@tanstack/react-query";
import { getSearchData } from "../../services/storeServices";

function useSearch(query) {
  const { data, status, refetch } = useQuery({
    queryKey: ["search", query],
    queryFn: () => getSearchData(query),
  });
  return { data, status, refetch };
}

export default useSearch;
