import QuantityCounter from "./QuantityCounter";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { removeProduct } from "../Features/Cart/CartSlice";
import { useState } from "react";
import Modal from "./Modal";

<TiDeleteOutline />;

function CartEach({ image, quantity, id, price }) {
  const [updateQuantity, setUpdateQuantity] = useState(quantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  function OnClickDel() {
    setIsModalOpen((open) => !open);
  }
  function handleCanceLBtn() {
    setIsModalOpen(false);
  }
  function onClickDelBtn(id) {
    dispatch(removeProduct(id));
  }
  return (
    <div className="rounded-md p-2 border flex justify-between h-28 items-center mt-2 relative">
      <div className="flex gap-3 justify-center items-center">
        <img src={image} className="h-16 w-16" />
        <div className="">
          <QuantityCounter
            quantity={updateQuantity}
            setQuantity={setUpdateQuantity}
            small={true}
          />
        </div>
      </div>
      <span className="font-medium">${price}</span>
      <button
        onClick={OnClickDel}
        className=" flex items-start h-full absolute right-1 top-1"
      >
        <TiDeleteOutline className="h-6 w-6" />
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <h1 className="mb-6">Are you sure you want to delete this Item?</h1>
          <div className="w-3/4  flex justify-between">
            <button
              className="p-2 rounded-2xl bg-slate-200 hover:bg-slate-400"
              onClick={handleCanceLBtn}
            >
              Cancel
            </button>
            <button
              onClick={() => onClickDelBtn(id)}
              className="p-2 rounded-2xl bg-slate-200 hover:bg-slate-400"
            >
              Yes,delete
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default CartEach;
