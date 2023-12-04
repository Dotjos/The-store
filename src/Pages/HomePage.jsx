import { useStore } from "../Features/Store/useStore";
import BigSpinner from "../ui/BigSpinner";
import Product from "../ui/Product";

function HomePage() {
  const { products, status } = useStore();

  if (status === "pending") return <BigSpinner />;
  return (
    <div className="p-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 ">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default HomePage;
