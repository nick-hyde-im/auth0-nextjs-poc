import React from 'react';

const DEFAULT_CLASSNAME = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';

const Button = ({ children, className, ...restProps }) => (
  <button className={className || DEFAULT_CLASSNAME} {...restProps}>
    {children}
  </button>
);

export default Button;