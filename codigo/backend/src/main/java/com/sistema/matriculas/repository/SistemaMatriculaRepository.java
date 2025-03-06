package com.sistema.matriculas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sistema.matriculas.model.SistemaMatricula;

public interface SistemaMatriculaRepository extends MongoRepository<SistemaMatricula, Long> {
}