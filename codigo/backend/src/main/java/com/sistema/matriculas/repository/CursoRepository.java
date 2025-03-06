package com.sistema.matriculas.repository;

import com.sistema.matriculas.model.Curso;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursoRepository extends MongoRepository<Curso, Long> {
}