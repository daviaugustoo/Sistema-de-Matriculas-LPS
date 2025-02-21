package com.sistema.matriculas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "disciplinas")
public class Disciplina {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String codigo;

    @ManyToOne
    private Professor professor;

    @ManyToMany(mappedBy = "disciplinasMatriculadas")
    private List<Aluno> alunos;

    // Getters e Setters

    public Long getId(){
        return this.id;
    }

    public String getCodigo(){
        return this.matricula;
    }

    public String getNome(){
        return this.nome;
    }

    public Professor getProfessor(){
        return this.professor;
    }

    public List<Aluno> getAlunos(){
        return this.alunos;
    }
    
    public void setProfessor(Professor professor){
        this.professor = professor;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setCodigo(String codigo){
        this.codigo = codigo;
    }

    public void setAlunos(List<Aluno> alunos){
        this.alunos = alunos;
    }

}
