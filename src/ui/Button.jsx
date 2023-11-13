function Button({ children }) {
  return (
    <button className="px-2 py-1 lg:px-4  lg:py-2 rounded-md bg-black text-white text-sm font-medium lg:text-xl">
      {children}
    </button>
  );
}

export default Button;
