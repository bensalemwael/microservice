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
public class Category {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long id ;
    @Column
    private String name ;
    @OneToMany(mappedBy = "category")
    @JsonBackReference
    private List<Product> products;
}
