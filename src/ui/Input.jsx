function Input({ type, placeholder, value, onChange, disabled }) {
  return (
    <input
      className=" outline-none rounded-md my-2 px-3 py-2 lg:my-3 lg:px-5 lg:py-3 focus:ring-2 focus:ring-slate-400"
      placeholder={placeholder}
      required
      type={type}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
