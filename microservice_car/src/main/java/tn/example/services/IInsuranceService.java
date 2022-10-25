package tn.example.services;

import tn.example.entities.Insurance;

import java.util.List;

public interface IInsuranceService {

    Insurance add(Insurance insurance, long carId);
    Insurance update(Insurance insurance, Long id);
    void delete(long id);
    List<Insurance> findAll();
    Insurance findById(Long id);
}
