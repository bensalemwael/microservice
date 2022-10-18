package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Department;

@Repository

public interface DepartmentRepository extends JpaRepository<Department,Long> {


}
