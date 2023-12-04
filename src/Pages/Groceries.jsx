import useGroceries from "../Features/Groceries/usegroceries";
import BigSpinner from "../ui/BigSpinner";
import Product from "../ui/Product";

function Groceries() {
  const { Groceries, status } = useGroceries();

  if (status === "pending") return <BigSpinner />;
  return (
    <div className="p-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {Groceries?.map((grocery) => (
        <Product key={grocery.id} product={grocery} />
      ))}
    </div>
  );
}

export default Groceries;
