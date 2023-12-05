import { useParams } from "react-router";
import { useStoreOne } from "../Features/Store/useStoreOne";
import BigSpinner from "./BigSpinner";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/Cart/CartSlice";
import { useState } from "react";
import QuantityCounter from "./QuantityCounter";
import toast from "react-hot-toast";

function ProductDetail() {
  const { productId } = useParams();
  const { data, status } = useStoreOne(productId);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function MoveToCart() {
    dispatch(addToCart({ ...data, quantity }));
    toast.success("Successfully added to cart.", { duration: 1000 });
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (status === "pending") return <BigSpinner />;
  return (
    <div className="flex flex-col gap-10 lg:w-full justify-center p-1 items-center lg:h-3/4   md:flex-row">
      <div className="outline-none flex items-center justify-center md:justify-normal ">
        <img
          src={data?.images[0]}
          alt="Product Image"
          width="300"
          height="300"
        />
      </div>
      <div className="font-medium text-lg flex bg-slate-200 border-8  rounded-xl p-6 flex-col gap-y-8">
        <div>
          <h1>
            <span className="">{data.title}</span>
          </h1>
          <h1>
            Price:<span>${data.price}</span>
          </h1>
          <h1>
            Category:<span>{capitalizeFirstLetter(data.category)}</span>
          </h1>
          <h1 className="">
            Rating:<span className="mr-3">{data.rating}/5</span>
          </h1>
        </div>

        <div>
          <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
        </div>

        <div className="">
          <button
            className="rounded-3xl px-2 py-1 border hover:bg-slate-400 bg-slate-400 font-medium text-lg"
            onClick={() => MoveToCart()}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
