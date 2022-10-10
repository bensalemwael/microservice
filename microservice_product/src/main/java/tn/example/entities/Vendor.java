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
public class Vendor {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long vendorId;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String email;
    @Column
    private String location;


    @OneToMany(mappedBy = "vendor")
    @JsonBackReference
    private List<Material> materials;
}
