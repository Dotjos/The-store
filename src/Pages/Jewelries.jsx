import { useJewelry } from "../Features/Jewelry/useJewelry";
import BigSpinner from "../ui/BigSpinner";
import Product from "../ui/Product";

function Jewelries() {
  const { jewelries, status } = useJewelry();
  if (status === "pending") return <BigSpinner />;
  return (
    <div className="p-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {jewelries?.map((jewelry) => (
        <Product key={jewelry.id} product={jewelry} />
      ))}
    </div>
  );
}

export default Jewelries;
