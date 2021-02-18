function FormButton(props) {
  return (
    <button
      className="w-full text-white bg-blue-500 rounded-md py-1 px-2 mb-2 cursor-pointer hover:bg-blue-400"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default FormButton;
