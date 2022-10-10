package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Absence;
import tn.example.entities.Departement;

@Repository
public interface AbsenceRepository  extends JpaRepository<Absence,Long> {
}
