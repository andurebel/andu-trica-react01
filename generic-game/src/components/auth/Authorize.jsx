import { useAuth } from "../../hooks";
import React from "react";

export const Authorize = ({ children }) => {
  const { authenticated, established } = useAuth();

  return (
    <>
      {!established
        ? "Logging you in..."
        : authenticated
        ? children
        : "Please log in first"}
    </>
  );
};

export default Authorize;
