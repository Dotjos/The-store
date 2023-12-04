import { BsCartX } from "react-icons/bs";

function EmptyCart() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-y-5">
      <div className="">
        <BsCartX className=" w-16 h-16 lg:w-32 lg:h-32" />
      </div>
      <h1 className="font-medium">Your cart is empty right now.</h1>
    </div>
  );
}

export default EmptyCart;
