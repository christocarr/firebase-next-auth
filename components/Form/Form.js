function Form({ children, onSubmit }) {
  return (
    <form
      className="flex flex-col rounded-md py-6 px-4 mb-3 w-full border-gray-100 border shadow-xl sm:w-2/3"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
