import useClothing from "../Features/Clothings/useClothing";
import BigSpinner from "../ui/BigSpinner";
import Product from "../ui/Product";

function Clothing() {
  const { clothings, status } = useClothing();
  if (status === "pending") return <BigSpinner />;
  return (
    <div className="p-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {clothings?.map((clothing) => (
        <Product key={clothing.id} product={clothing} />
      ))}
    </div>
  );
}

export default Clothing;
