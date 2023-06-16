import react from 'react'
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap'

function Login() {
        const handleSubmit= (e) => {
            e.preventDefault();
        };
    
        return (
            <div className="log-container">
            <form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.label>Email</Form.label>
                    <Form.Control type="email" placeholder="Ingrese su email"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña"/>
                </Form.Group>
                <button class="btn btn-primary" variant="primary" type="submit">
                    Iniciar sesión
                </button>
            </form>
            </div>
    
        )
    }


export default Login;