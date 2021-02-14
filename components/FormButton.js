function FormButton({ children, type, disabled }) {
  return (
    <button
      className="w-full text-white bg-blue-500 rounded-md py-1 px-2 cursor-pointer hover:bg-blue-400"
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default FormButton;
