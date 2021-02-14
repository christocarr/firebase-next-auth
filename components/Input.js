import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className="border border-gray-200 rounded mb-2 py-1 px-2"
      {...props}
      ref={ref}
    />
  );
});

export default Input;
