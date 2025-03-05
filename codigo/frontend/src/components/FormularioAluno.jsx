import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button, ListGroup } from "react-bootstrap";

export default function FormularioAluno() {

    const [aluno, setAluno] = useState({
        nome: "",
        senha: "",
        disciplinasMatriculadas: []
    })

    const [disciplinasDoAluno, setDiciplinasDoAluno] = useState([])
    const [listaDisciplinas, setListaDisciplinas] = useState([
        "Portugues",
        "Ingles",
        "Geografia",
        "Antunes"
    ])
    const [temp, setTemp] = useState("Portugues")

    function adicionaDisciplina() {
        if (disciplinasDoAluno.includes(temp)) {
            alert("Disciplina ja adicionada")
        } else {
            disciplinasDoAluno.push(temp)
        }
    }

    function removeDisciplina(disc) {
        setDiciplinasDoAluno(disciplinasDoAluno.filter((disciplina) => disciplina != disc))
        console.log(disciplinasDoAluno)
    }

    function mudaValoresAluno(evt) {
        const { name, value } = evt.target
        setAluno({
            ...aluno,
            [name]: value,
        })
    }

    function criaAluno(event) {
        event.preventDefault();
        alert(`nome: ${aluno.nome}, senha: ${aluno.senha}`)
    }

    return (
        <Container className="mt-5">
            <Row>
                <Form onSubmit={criaAluno}>
                    <Row className="text-center mb-5">
                        <h2>Novo Aluno</h2>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="text" name="nome" onChange={mudaValoresAluno} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha:</Form.Label>
                                <Form.Control type="password" name="senha" onChange={mudaValoresAluno} />
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
                                {disciplinasDoAluno.map((disciplina, index) => {
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