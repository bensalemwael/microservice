package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.example.entities.Event;


@Repository

public interface EventRepository extends JpaRepository<Event,Long> {


}
