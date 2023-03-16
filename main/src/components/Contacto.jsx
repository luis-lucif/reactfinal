import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Container} from "react-bootstrap";
import "./styles/contacto.css";

function Contacto() {
  return (
    <Container fluid className="bg-dark p-4">
    <Container className="contacto bg-light">
        <Form className="formularioDeContacto m-5">
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Nombre :</Form.Label>
                    <Form.Control placeholder="Tu nombre" />
                </Form.Group>
    
                <Form.Group as={Col}>
                    <Form.Label>Apellido :</Form.Label>
                    <Form.Control placeholder="Tu apellido" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Direccion :</Form.Label>
                <Form.Control placeholder="Calle falsa 123" />
            </Form.Group>

            <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Buenos Aires</option>
                        <option>Cordoba</option>
                        <option>Santa Cruz</option>
                        <option>Salta</option>
                        <option>Misiones</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Localidad</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Cp :</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Row>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                </FloatingLabel>
            </Row>

            <Form.Group className="pt-2">
                <Button variant="primary" type="submit">Enviar</Button>
                <Button variant="danger" type="reset">Borrar</Button>
            </Form.Group>
        </Form>
    </Container>
    </Container>
  );
}

export default Contacto