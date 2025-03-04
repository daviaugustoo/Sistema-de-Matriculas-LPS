package com.sistema.matriculas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.List;

@Document(collection = "matricula")
public class SistemaMatricula {
    @Id
    private Long id;

    @Autowired
    private MongoTemplate mongoTemplate;

    private Aluno aluno;
    private Disciplina disciplina;

    public void registrarAluno(Aluno aluno) {
        mongoTemplate.save(aluno);
    }

    public void registrarProfessor(Professor professor) {
        mongoTemplate.save(professor);
    }

    public void efetuarMatricula(Aluno aluno, Disciplina disciplina) {
        SistemaMatricula matricula = new SistemaMatricula();
        matricula.registrarAluno(aluno);
        mongoTemplate.save(matricula);
    }

    public void cancelarMatricula(Aluno aluno, Disciplina disciplina) {
        List<SistemaMatricula> matriculas = mongoTemplate.findAll(SistemaMatricula.class);
        for (SistemaMatricula matricula : matriculas) {
            if (matricula.getAluno().equals(aluno) && matricula.getDisciplina().equals(disciplina)) {
                mongoTemplate.remove(matricula);
                break;
            }
        }
    }

    public Aluno getAluno() {
        return this.aluno;
    }

    
    public Disciplina getDisciplina() {
        return this.disciplina;
    }
}