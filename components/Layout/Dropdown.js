function Dropdown({ children }) {
  return (
    <div className="flex flex-col absolute top-10 right-6 px-4 py-2 bg-white w-full border border-gray-200 rounded-md shadow-xl">
      {children}
    </div>
  );
}

export default Dropdown;
