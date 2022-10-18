package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Absence;

@Repository
public interface AbsenceRepository  extends JpaRepository<Absence,Long> {
}
