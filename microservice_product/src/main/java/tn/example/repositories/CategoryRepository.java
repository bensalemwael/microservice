package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
}
