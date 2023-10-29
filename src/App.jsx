import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Registro } from "./Components/Registro";
import { useState } from "react";

function App() {
  const [alertMessage, setAlertMessage] = useState("");
  return (
    <>
      <Registro setAlertMessage={setAlertMessage} alertMessage={alertMessage} />
    </>
  );
}

export default App;
