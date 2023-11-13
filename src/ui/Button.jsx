function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2.5 py-1.5 lg:px-4 w-max lg:py-2 rounded-md bg-black text-white text-sm font-medium lg:text-xl"
    >
      {children}
    </button>
  );
}

export default Button;
