import React from "react";

const skins = {
  primary:
    "bg-blue-500 inline-block text-center py-2 px-4 text-white rounded hover:bg-green-500",
  primaryInverted:
    "border border-green-500 inline-block text-center py-2 px-4 rounded hover:bg-green-700 hover:text-white ",
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
