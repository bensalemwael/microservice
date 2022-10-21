package tn.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.example.entities.Absence;
import javax.transaction.Transactional;

import java.util.List;

@Repository
public interface AbsenceRepository  extends JpaRepository<Absence,Long> {
    public List<Absence> findAllByuserId(Long userId);

    @Modifying
    @Transactional
    @Query("delete from Absence u where u.userId = ?1")
    void deleteAbsencesByUserid(Long userId);

}
