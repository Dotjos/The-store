function Input({ type, placeholder }) {
  return (
    <input
      className=" outline-none rounded-md my-2 px-3 py-2 focus:ring-2 focus:ring-slate-400"
      placeholder={placeholder}
      type={type}
    />
  );
}

export default Input;