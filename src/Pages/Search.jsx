import { useParams } from "react-router";
import useSearch from "../Features/Search/useSearch";
import Product from "../ui/Product";
import BigSpinner from "../ui/BigSpinner";

function Search() {
  const { query } = useParams();
  const { data, status } = useSearch(query);

  if (status === "pending") return <BigSpinner />;
  if (data?.length === 0)
    return (
      <h1 className="font-medium text-lg text-center">Product not found.</h1>
    );
  return (
    <div>
      <div className="p-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
        {data?.map((prod) => (
          <Product product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default Search;
