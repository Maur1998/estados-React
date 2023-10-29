import { Button, Form } from "react-bootstrap"

export const Formulario = () => {
  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="nombre">
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" placeholder="tuemail@ejemplo.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
  )
}
