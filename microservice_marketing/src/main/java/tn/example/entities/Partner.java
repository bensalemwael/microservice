package tn.example.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Entity
public class Partner {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long id ;
    @Column
    private String name ;
    @Column
    private Float budget ;
    @Column
    private Float percentage ;
    @Column
    private Date starting_date ;



}