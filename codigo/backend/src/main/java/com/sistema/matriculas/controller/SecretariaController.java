package com.sistema.matriculas.controller;

import com.sistema.matriculas.model.Secretaria;
import com.sistema.matriculas.repository.SecretariaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/secretaria")
public class SecretariaController {

    @Autowired
    private SecretariaRepository secretariaRepository;

    @GetMapping
    public List<Secretaria> listarTodas() {
        return secretariaRepository.findAll();
    }

    @PostMapping
    public Secretaria cadastrar(@RequestBody Secretaria secretaria) {
        return secretariaRepository.save(secretaria);
    }

    @PostMapping("/gerarCurriculo")
    public String gerarCurriculo() {
        
        return "Currículo gerado!";
    }

    @PostMapping("/criarDisciplina")
    public String criarDisciplina() {

        return "Disciplina criada!";
    }

    @PostMapping("/cancelarDisciplina")
    public String cancelarDisciplina() {
        
        return "Disciplina cancelada!";
    }
}