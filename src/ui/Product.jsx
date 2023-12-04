import { useNavigate, useSearchParams } from "react-router-dom";

function Product({ product }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  function ClickDetails() {
    navigate(`/ProductDetails/${product.id}`);
  }

  return (
    <div
      className="rounded-md border outline-none overflow-hidden"
      onClick={ClickDetails}
    >
      <div className="h-20 w-full flex items-center justify-center">
        <img
          src={product.images[0]}
          className="object-cover w-full h-20"
          alt="Product"
        />
      </div>
      <div className="bg-slate-200 font-medium py-1 px-2 h-full">
        <h1 className=" ">$ {product.price}</h1>
        <h1 className="uppercase text-xs">{product.title}</h1>
      </div>
    </div>
  );
}

export default Product;
