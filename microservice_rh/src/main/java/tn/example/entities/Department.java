package tn.example.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Entity
public class Department {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long departmentId;
    @Column
    private String departmentName;



}
