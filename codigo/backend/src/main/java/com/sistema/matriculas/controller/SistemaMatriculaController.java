package com.sistema.matriculas.controller;

import com.sistema.matriculas.model.SistemaMatricula;
import com.sistema.matriculas.repository.AlunoRepository;
import com.sistema.matriculas.repository.DisciplinaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/matricula")
@CrossOrigin(origins = "")
public class SistemaMatriculaController {

    @Autowired
    private SistemaMatriculaRepository sistemaMatriculaRepository;

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private DisciplinaRepository disciplinaRepository;

    @PostMapping("/registrarAluno")
    public String registrarAluno(@RequestBody Aluno aluno) {
        alunoRepository.save(aluno);
        return "Aluno registrado com sucesso!";
    }

    @PostMapping("/matricular")
    public String efetuarMatricula(@RequestParam Long alunoId, @RequestParam Long disciplinaId) {
        Aluno aluno = alunoRepository.findById(alunoId).orElse(null);
        Disciplina disciplina = disciplinaRepository.findById(disciplinaId).orElse(null);

        if (aluno != null && disciplina != null) {
            aluno.getDisciplinasMatriculadas().add(disciplina);
            alunoRepository.save(aluno);
            return "Matrícula realizada com sucesso!";
        }
        return "Aluno ou disciplina não encontrados!";
    }

    @PostMapping("/cancelarMatricula")
    public String cancelarMatricula(@RequestParam Long alunoId, @RequestParam Long disciplinaId) {
        Aluno aluno = alunoRepository.findById(alunoId).orElse(null);
        Disciplina disciplina = disciplinaRepository.findById(disciplinaId).orElse(null);

        if (aluno != null && disciplina != null) {
            aluno.getDisciplinasMatriculadas().remove(disciplina);
            alunoRepository.save(aluno);
            return "Matrícula cancelada com sucesso!";
        }
        return "Aluno ou disciplina não encontrados!";
    }
}