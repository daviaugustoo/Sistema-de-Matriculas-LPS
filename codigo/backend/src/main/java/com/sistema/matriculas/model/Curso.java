package com.sistema.matriculas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.DBRef;
import java.util.List;

@Data
@Document(collection = "cursos")
public class Curso {
    @Id
    private Long id;
    private String nome;
    private int creditos;   

    @DBRef
    private List<Disciplina> disciplinas;

    // Getters e Setters
    public Long getId(){
        return this.id;
    }

    public String getNome(){
        return this.nome;
    }

    public int getCreditos(){
        return this.creditos;
    }

    public List<Disciplina> getDisciplinas(){
        return this.disciplinas;
    }

    public void setCreditos(int creditos){
        this.creditos = creditos;
    }

    public void setNome(String nome){
        this.nome = nome;
    }
    
    public void setDisciplinas(List<Disciplina> lista){
        this.disciplinas = lista;
    }
}