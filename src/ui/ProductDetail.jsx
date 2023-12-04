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
  const orderPrice = data ? quantity * data.price : null;
  function MoveToCart() {
    dispatch(addToCart({ ...data, quantity, orderPrice }));
    toast.success("Successfully added to cart.", { duration: 1000 });
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (status === "pending") return <BigSpinner />;
  return (
    <div className="flex flex-col gap-16 lg:w-full h-screen justify-center items-center lg:h-3/4 mt-8 lg:mt-0  md:flex-row">
      <div className="h-32 lg:w-1/2 flex items-center justify-center md:justify-normal">
        <img
          src={data?.images[0]}
          alt="Product Image"
          width="200px"
          height="200px"
        />
      </div>
      <div className="font-medium text-lg flex flex-col gap-10">
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
            Rating:<span className="mr-3">{data.rating.rate}/5</span>
            <span className="font-normal text-sm">
              {data.rating.count}reviews
            </span>
          </h1>
        </div>

        <div>
          <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
        </div>

        <div className="">
          <button
            className="rounded-3xl p-2 border bg-slate-400 hover:bg-slate-200 font-medium text-lg"
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
