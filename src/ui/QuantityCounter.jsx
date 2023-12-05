import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";
function QuantityCounter({
  quantity,
  setQuantity,
  small,
  updateQuantIncr,
  updateQuantDecr,
}) {
  function handleQuantityIncrease() {
    setQuantity((quantity) => quantity + 1);
  }

  function handleQuantityDecrease() {
    setQuantity((quantity) => (quantity === 1 ? (quantity = 1) : quantity - 1));
  }
  if (small === true)
    return (
      <div className="flex gap-2  justify-center items-center">
        <button
          className="border border-slate-500 rounded-full  p-1.5 hover:bg-slate-300"
          onClick={() => {
            updateQuantIncr();
            handleQuantityIncrease();
          }}
        >
          <FaCaretUp className="w-3 h-3" />
        </button>

        <input
          type="text"
          className="border border-slate-700 outline-none w-8 h-5  text-center text-sm p-0.5"
          min="1"
          disabled
          maxLength="3"
          value={quantity}
          onChange={(e) => {
            const typedValue = e.target.value;
            const validVal =
              /^\d*$/.test(typedValue) && typedValue < 1 ? 1 : typedValue;
            setQuantity(validVal);
          }}
        />

        <button
          className="border border-slate-500 rounded-full p-1.5 hover:bg-slate-300"
          onClick={() => {
            updateQuantDecr();
            handleQuantityDecrease();
          }}
        >
          <FaCaretDown className="w-3 h-3" />
        </button>
      </div>
    );
  return (
    <div className="flex gap-4">
      <button
        className="border border-slate-500 rounded-full p-3 hover:bg-slate-300"
        onClick={handleQuantityIncrease}
      >
        <FaCaretUp />
      </button>

      <input
        type="text"
        className="border border-slate-700 outline-none w-16 h-10 text-center"
        min="1"
        maxLength="3"
        value={quantity}
        onChange={(e) => {
          const typedValue = e.target.value;
          const validVal =
            /^\d*$/.test(typedValue) && typedValue < 1 ? 1 : typedValue;
          setQuantity(validVal);
        }}
      />

      <button
        className="border border-slate-500 rounded-full p-3 hover:bg-slate-300"
        onClick={handleQuantityDecrease}
      >
        <FaCaretDown />
      </button>
    </div>
  );
}

export default QuantityCounter;
