package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Product;


@Repository

public interface ProductRepository extends JpaRepository<Product,Long> {


}
