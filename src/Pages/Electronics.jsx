import useElectronics from "../Features/Electronics/useElectronics";
import BigSpinner from "../ui/BigSpinner";
import Product from "../ui/Product";

function Electronics() {
  const { Electronics, status } = useElectronics();
  if (status === "pending") return <BigSpinner />;
  return (
    <div className="p-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {Electronics?.map((electronic) => (
        <Product key={electronic.id} product={electronic} />
      ))}
    </div>
  );
}

export default Electronics;
