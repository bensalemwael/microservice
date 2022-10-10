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

public class Product {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long productId;
    @Column
    private String name;
    @Column
    private float quantity;
    @Column
    private String size;
    @Column
    private float price;
    @ManyToOne()
    private Category category;
}
