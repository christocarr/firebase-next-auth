function Label({ htmlFor, children }) {
  return (
    <label className="text-base" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
