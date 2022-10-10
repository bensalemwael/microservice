package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Partner;

@Repository
public interface PartnerRepository extends JpaRepository<Partner,Long> {
}
