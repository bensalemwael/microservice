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
public class Material {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long materialId;
    @Column
    private String name;
    @Column
    private float quantity;
    @Column
    private String size;
    @Column
    private String type;
    @Column
    private float price;

    @ManyToOne
    private Vendor vendor;

}
