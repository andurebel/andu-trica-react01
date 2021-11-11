import React from "react";

const skins = {
  primary:
    "bg-blue-500 inline-block text-center py-2 px-4 text-white rounded hover:bg-indigo-700",
};

export const Button = (props) => {
  const {
    skin = Object.keys(skins)[0],
    children,
    element = "button",
    className = "",
    ...otherProps
  } = props;

  const cssClasses = `${className} ${skins[skin]}`;

  const Element = element;

  return (
    <Element className={cssClasses} {...otherProps}>
      {children}
    </Element>
  );
};

export default Button;
