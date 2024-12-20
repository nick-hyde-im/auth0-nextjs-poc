import React from 'react';

const Button = ({ children, onClick }) => (
  <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white">
    {children}
  </button>
);

export default Button;