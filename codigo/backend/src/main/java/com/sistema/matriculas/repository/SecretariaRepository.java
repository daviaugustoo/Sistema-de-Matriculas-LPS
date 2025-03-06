package com.sistema.matriculas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sistema.matriculas.model.Secretaria;

public interface SecretariaRepository extends MongoRepository<Secretaria, Long> {
}