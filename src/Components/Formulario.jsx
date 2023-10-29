import { useState } from "react";

export const Formulario = ({
  setAlertState,
  setAlertMessage,
  setAlertType,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [contrasena2, setContrasena2] = useState("");

  function checkInputs() {
    if (
      name &&
      email &&
      contrasena &&
      contrasena2 &&
      contrasena == contrasena2 &&
      email.includes("@") &&
      email.includes(".")
    ) {
      setAlertMessage("Registro completo");
      setAlertType("success");
    } else {
      setAlertMessage("Existen campos vacios o invalidos");
      setAlertType("danger");
    }
    setAlertState(true);
  }

  function handleSubmit() {
    let alert1 = document.querySelector("#alert1");
    let alert2 = document.querySelector("#alert2");
    event.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      let html = `
            <p style="color:red">El debe estar en el formato correcto</p>
            `;
      alert1.innerHTML = html;
    } else {
      let html = "";
      alert1.innerHTML = html;
    }
    if (contrasena != contrasena2) {
      let html = `
            <p style="color:red">Las contraseñas no coinciden</p>
            `;
      alert2.innerHTML = html;
    } else {
      let html = "";
      alert2.innerHTML = html;
    }
    checkInputs();
  }
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="tuemail@ejemplo.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div id="alert1"></div>
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => {
            setContrasena(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirma tu contraseña"
          onChange={(e) => {
            setContrasena2(e.target.value);
          }}
        />
        <p id="alert2"></p>

        <button className="btn btn-success" variant="primary" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};
