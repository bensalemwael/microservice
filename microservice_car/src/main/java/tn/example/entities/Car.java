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
public class Car {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long id ;

    @Column
    private String reference ;

    @Column
    private String nbr_horses ;

    @OneToOne(cascade = CascadeType.REMOVE, orphanRemoval = true)
    @JsonBackReference
    private Insurance insurance;
}
