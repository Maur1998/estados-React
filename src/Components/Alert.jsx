import { Alert } from "react-bootstrap";
import React from "react";
export const AlertComp = ({ alertMessage, alertState, alertType }) => {
  return (
    <>
      {alertState ? (
        <Alert style={{ marginTop: "1rem" }} variant={alertType}>
          {alertMessage}
        </Alert>
      ) : null}
    </>
  );
};
