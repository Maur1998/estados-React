import { useState } from "react"

export const Formulario = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [contraseña2, setContraseña2] = useState("")

    function handleSubmit(){
        let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/;
        let alert1 = document.querySelector("#alert1")
        event.preventDefault();
        if(!regex.test(contraseña)){
            let html = `
            <p>La contraseña debe llevar por lo menos una letra mayúscula, una minúscula y un número</p>
            `
            alert1.innerHTML = html;
        }
        else {
            let html =  ""
            alert1.innerHTML = html;
        }
        if(contraseña != contraseña2){
            alert("Las contraseñas no coinciden")
        }
        else if (!email.includes('@') || !email.includes('.')){
            alert("El email debe estar en el formato correcto")
        }
    }
  return (

    <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder="tuemail@ejemplo.com" onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder="Contraseña" onChange={(e)=>{setContraseña(e.target.value)}} />
            <div id="alert1"></div>
            <input type="password" placeholder="Confirma tu contraseña" onChange={(e)=>{setContraseña2(e.target.value)}} />

            <button variant="primary" type="submit">
                Registrarse
            </button>
        </form>
    </>
  )
}
