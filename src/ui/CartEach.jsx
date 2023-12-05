import QuantityCounter from "./QuantityCounter";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../Features/Cart/CartSlice";
import { useState } from "react";
import Modal from "./Modal";

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
  function quantUpdateIncr() {
    dispatch(increaseQuantity(id));
  }
  function quantUpdateDecr() {
    dispatch(decreaseQuantity(id));
  }
  return (
    <div className="rounded-md p-2 border flex justify-between bg-slate-200  h-28 items-center mt-2 relative z-0">
      <div className="flex gap-3 justify-center items-center">
        <img src={image} className="h-16 w-16 lg:w-32 lg:h-20" />
        <div className="">
          <QuantityCounter
            quantity={updateQuantity}
            setQuantity={setUpdateQuantity}
            small={true}
            updateQuantIncr={quantUpdateIncr}
            updateQuantDecr={quantUpdateDecr}
          />
        </div>
      </div>
      <span className="font-medium">${price * quantity}</span>
      <button
        onClick={OnClickDel}
        className=" flex items-start h-full absolute right-1 top-1"
      >
        <TiDeleteOutline className="h-6 w-6" />
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <h1 className="mb-6">Are you sure you want to delete this Item?</h1>
          <div className=" flex justify-end  gap-x-4 ">
            <button
              className="py-2 px-4 rounded-xl bg-slate-200 text-sm hover:bg-slate-400"
              onClick={handleCanceLBtn}
            >
              Cancel
            </button>
            <button
              onClick={() => onClickDelBtn(id)}
              className="py-2 px-4 rounded-xl bg-slate-200 hover:bg-slate-400 text-sm"
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
