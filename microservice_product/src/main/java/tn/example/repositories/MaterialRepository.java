package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Material;

@Repository

public interface MaterialRepository extends JpaRepository<Material,Long> {


}
