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
public class Absence {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long AbsenceId;
    @Column
    private String date;
    @Column
    private String cause;
    @Column
    private Long userId;
}
