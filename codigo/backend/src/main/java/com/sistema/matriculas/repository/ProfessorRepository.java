package com.sistema.matriculas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sistema.matriculas.model.Professor;

public interface ProfessorRepository extends MongoRepository<Professor, Long> {
}
