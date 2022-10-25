package tn.example.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Entity

public class Insurance {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long id;
    @Column
    private String type;
    @Temporal(TemporalType.DATE)
    @Column
    private Date start_date;
    @Temporal(TemporalType.DATE)
    @Column
    private Date end_date;

    @OneToOne(cascade = CascadeType.REMOVE, orphanRemoval = true)
    private Car car;
}
