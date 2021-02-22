function Form({ children, onSubmit }) {
  return (
    <form
      className="flex flex-col rounded-md py-6 px-4 mb-3 w-5/6 bg-white border-gray-100 border shadow-xl sm:max-w-sm"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
