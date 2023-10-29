import React, { useState } from "react";
import { SocialButton } from "./SocialButton";
import { Formulario } from "./Formulario";
import { AlertComp } from "./Alert";
export const Registro = ({ setAlertMessage, alertMessage }) => {
  const [alertState, setAlertState] = useState(false);
  const [alertType, setAlertType] = useState("");
  return (
    <div className="registro">
      <h1>Crea una cuenta</h1>
      <div className="icon-container">
        <SocialButton icon={"fa-brands fa-facebook fa-2xl"} />
        <SocialButton icon={"fa-brands fa-github fa-2xl"} />
        <SocialButton icon={"fa-brands fa-linkedin-in fa-2xl"} />
      </div>
      <p>O usa tu email para registrarte</p>
      <Formulario
        setAlertMessage={setAlertMessage}
        setAlertState={setAlertState}
        setAlertType={setAlertType}
      />
      <AlertComp
        alertMessage={alertMessage}
        alertState={alertState}
        alertType={alertType}
      />
    </div>
  );
};
