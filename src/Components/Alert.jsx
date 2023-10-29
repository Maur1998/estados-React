import React from "react";
export const Alert = ({ alertMessage, alertState }) => {
  return <div>{alertState ? alertMessage : null}</div>;
};
