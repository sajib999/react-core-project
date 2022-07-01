import React, { useEffect } from "react";

const Alert = ({ msg, list, type, removeItem }) => {
  useEffect(() => {
    const timeout = setInterval(() => {
      removeItem();
    }, 3000);
    return () => clearInterval(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
