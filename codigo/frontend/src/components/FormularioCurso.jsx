import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button, ListGroup } from "react-bootstrap";

export default function FormularioCurso() {

    const [disciplina, setDisciplina] = useState({
        nome: "",
        creditos: "",
    })

    const [disciplinasDoCurso, setDiciplinasDoAluno] = useState([])
    const [listaDisciplinas, setListaDisciplinas] = useState([
        "Portugues",
        "Ingles",
        "Geografia",
        "Antunes"
    ])
    const [temp, setTemp] = useState("Portugues")

    function adicionaDisciplina() {
        if (disciplinasDoCurso.includes(temp)) {
            alert("Disciplina ja adicionada")
        } else {
            disciplinasDoCurso.push(temp)
        }
    }

    function removeDisciplina(disc) {
        setDisciplinasDoCurso(disciplinasDoCurso.filter((disciplina) => disciplina != disc))
        console.log(disciplinasDoCurso)
    }


    function mudaValoresCurso(evt) {
        const { name, value } = evt.target
        setDisciplina({
            ...disciplina,
            [name]: value,
        })
    }

    function criaCurso(event) {
        event.preventDefault();
        alert(`nome: ${curso.nome}, creditos: ${curso.creditos}`)
    }

    return (
        <Container className="mt-5">
            <Row>
                <Form onSubmit={criaCurso}>
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
                                <Form.Control type="text" name="creditos" onChange={mudaValoresDisciplina} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Label>Selecione as Materias:</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(event) => (setTemp(event.target.value))}>
                                {listaDisciplinas.map((disciplina, index) => {
                                    return <option key={index}>{disciplina}</option>
                                })}
                            </Form.Select>
                        </Col>
                        <Col style={{ marginTop: "32px" }}>
                            <Button onClick={adicionaDisciplina}>Adicionar</Button>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <ListGroup>
                                <a>Materias adicionadas:</a>
                                {disciplinasDoCurso.map((disciplina, index) => {
                                    return (<>
                                        <Row>
                                            <Col xs="10">
                                                <ListGroup.Item key={index}>{disciplina}</ListGroup.Item>
                                            </Col>
                                            <Col xs="1">
                                                <Button variant="danger" onClick={() => removeDisciplina(disciplina)}>X</Button>
                                            </Col>
                                        </Row>
                                    </>
                                    )

                                })}
                            </ListGroup>
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