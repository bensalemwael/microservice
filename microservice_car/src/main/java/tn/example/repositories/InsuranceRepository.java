package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Insurance;


@Repository

public interface InsuranceRepository extends JpaRepository<Insurance,Long> {


}
