package tn.example.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Entity
public class Department {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long DepartementId;
    @Column
    private String NomDepartement;

    @OneToMany(mappedBy = "departement")
    @JsonBackReference
    private List<User> users;

}
