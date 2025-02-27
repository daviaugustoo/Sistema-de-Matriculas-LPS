package com.sistema.matriculas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import java.util.List;

@Data
@Document(collection = "matriculas")
public class SistemaMatricula {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Autowired
    private MongoTemplate mongoTemplate;

    public void registrarAluno(Aluno aluno) {
        mongoTemplate.save(aluno);
    }

    public void registrarProfessor(Professor professor) {
        mongoTemplate.save(professor);
    }

    public void efetuarMatricula(Aluno aluno, Disciplina disciplina) {
        Matricula matricula = new Matricula(aluno, disciplina);
        mongoTemplate.save(matricula);
    }

    public void cancelarMatricula(Aluno aluno, Disciplina disciplina) {
        List<Matricula> matriculas = mongoTemplate.findAll(Matricula.class);
        for (Matricula matricula : matriculas) {
            if (matricula.getAluno().equals(aluno) && matricula.getDisciplina().equals(disciplina)) {
                mongoTemplate.remove(matricula);
                break;
            }
        }
    }

    // public void notificarSistemaCobranca() {
    // }
}