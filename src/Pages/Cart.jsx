import { useDispatch, useSelector } from "react-redux";
import CartEach from "../ui/CartEach";
import EmptyCart from "../ui/EmptyCart";
import { clearStore } from "../Features/Cart/CartSlice";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = cart.products;
  const totalPrice = cartProducts.reduce((acc, obj) => {
    return acc + obj.quantity * obj.price;
  }, 0);
  function orderClicked() {
    dispatch(clearStore());
    toast("Order successfully placed.");
    navigate("/home");
  }
  if (cartProducts.length === 0) return <EmptyCart />;
  return (
    <div className="w-full   md:w-3/4">
      <div className="p-2">
        {cartProducts.map((cartProduct) => (
          <CartEach
            key={cartProduct.id}
            image={cartProduct.images[0]}
            quantity={cartProduct.quantity}
            id={cartProduct.id}
            price={cartProduct.price}
          />
        ))}
      </div>
      <div className="flex justify-between p-2">
        <span>TotalPrice</span>
        <span className="font-medium">${Number(totalPrice).toFixed(2)}</span>
      </div>
      <button
        className="p-3 bg-slate-200 hover:bg-slate-400 rounded-lg font-medium ml-2"
        onClick={orderClicked}
      >
        Place Order
      </button>
    </div>
  );
}

export default Cart;
