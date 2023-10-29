import Alert from 'react-bootstrap/Alert';
import { useState } from "react"

export const Formulario = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [contraseña2, setContraseña2] = useState("")

    function handleSubmit(){
        let alert1 = document.querySelector("#alert1")
        let alert2 = document.querySelector("#alert2")
        event.preventDefault();
        if (!email.includes('@') || !email.includes('.')){
            let html = `
            <p style="color:red">El email debe estar en el formato correcto</p>
            `
            alert1.innerHTML = html;
        } else{
            let html = ""
            alert1.innerHTML = html;
        }
        if(contraseña != contraseña2){
            let html = `
            <p style="color:red">Las contraseñas no coinciden</p>
            `
            alert2.innerHTML = html;
        } else {
            let html = ""
            alert2.innerHTML = html;
        }
    }
  return (

    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder="tuemail@ejemplo.com" onChange={(e)=>{setEmail(e.target.value)}} />
            <div id="alert1"></div>
            <input type="password" placeholder="Contraseña" onChange={(e)=>{setContraseña(e.target.value)}} />
            <input type="password" placeholder="Confirma tu contraseña" onChange={(e)=>{setContraseña2(e.target.value)}} />
            <p id="alert2"></p>

            <button className="btn btn-success" variant="primary" type="submit">
                Registrarse
            </button>
        </form>
    </div>
  )
}
