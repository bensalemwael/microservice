package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor,Long> {
}
