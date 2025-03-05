import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button, ListGroup } from "react-bootstrap";

export default function FormularioDisciplina() {

    const [disciplina, setDisciplina] = useState({
        nome: "",
        codigo: "",
    })


    function mudaValoresDisciplina(evt) {
        const { name, value } = evt.target
        setDisciplina({
            ...disciplina,
            [name]: value,
        })
    }

    function criaDisciplina(event) {
        event.preventDefault();
        alert(`nome: ${disciplina.nome}, senha: ${disciplina.codigo}`)
    }

    return (
        <Container className="mt-5">
            <Row>
                <Form onSubmit={criaDisciplina}>
                    <Row className="text-center mb-5">
                        <h2>Nova Disciplina</h2>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="text" name="nome" onChange={mudaValoresDisciplina} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Creditos:</Form.Label>
                                <Form.Control type="text" name="codigo" onChange={mudaValoresDisciplina} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row >
                        <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button className="mt-2" variant="primary" type="submit">
                                Salvar
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Row>

        </Container>
    )
}