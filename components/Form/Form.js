function Form({ children, onSubmit }) {
  return (
    <form
      className="flex flex-col w-full rounded-md py-6 px-4 mb-3 border-gray-100 border shadow-xl"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
