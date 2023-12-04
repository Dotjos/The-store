import useSmartPhone from "../Features/SmartPhones/useSmartPhone";
import BigSpinner from "../ui/BigSpinner";
import Product from "../ui/Product";

function SmartPhone() {
  const { smartPhones, status } = useSmartPhone();
  console.log(smartPhones);
  if (status === "pending") return <BigSpinner />;
  return (
    <div className="p-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {smartPhones?.map((smartPhone) => (
        <Product key={smartPhone.id} product={smartPhone} />
      ))}
    </div>
  );
}

export default SmartPhone;
