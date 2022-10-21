package tn.example.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Entity

public class Event {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long eventId;

    @Column
    private String name;

    @Temporal(TemporalType.DATE)
    @Column
    private Date starting_date;

    @Temporal(TemporalType.DATE)
    @Column
    private Date ending_date;


}
