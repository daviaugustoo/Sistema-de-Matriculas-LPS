package com.sistema.matriculas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.util.List;

@Data
@Document(collection = "secretaria")
public class Secretaria {
    @Id
    private Long id;

    private List<Disciplina> listaDisciplinas;

    // Getters e Setters

    public Long getId(){
        return this.id;
    }

    public List<Disciplina> getListaDisciplinas(){
        return this.listaDisciplinas;
    }

    public void setListaDisciplinas(List<Disciplina> lista){
        this.listaDisciplinas = lista;
    }   
}