package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Departement;
import tn.example.entities.User;
@Repository

public interface DepartmentRepository extends JpaRepository<Departement,Long> {


}
