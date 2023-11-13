function Button({ children }) {
  return (
    <button className="px-2 py-1 rounded-md bg-black text-white text-sm font-medium">
      {children}
    </button>
  );
}

export default Button;
