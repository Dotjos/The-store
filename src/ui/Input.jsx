function Input({ type, placeholder }) {
  return (
    <input
      className=" outline-none rounded-md my-2 px-3 py-2 lg:my-3 lg:px-5 lg:py-3 focus:ring-2 focus:ring-slate-400"
      placeholder={placeholder}
      required
      type={type}
    />
  );
}

export default Input;
