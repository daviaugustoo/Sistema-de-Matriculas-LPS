package com.sistema.matriculas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sistema.matriculas.model.Aluno;

public interface AlunoRepository extends MongoRepository<Aluno, String> {
}
