package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Car;

@Repository
public interface CarRepository extends JpaRepository<Car,Long> {
}
