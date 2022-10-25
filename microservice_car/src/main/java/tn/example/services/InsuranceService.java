package tn.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.example.entities.Car;
import tn.example.entities.Insurance;
import tn.example.repositories.CarRepository;
import tn.example.repositories.InsuranceRepository;

import java.util.ArrayList;
import java.util.List;

@Service

public class InsuranceService implements IInsuranceService {
    @Autowired
    InsuranceRepository insuranceRepository;
    @Autowired
    CarRepository carRepository;
    @Override
    public Insurance add(Insurance insurance, long carId) {
        Car car = carRepository.findById(carId).orElse(null);
        Insurance i = insuranceRepository.save(insurance) ;
        i.setCar(car);
        car.setInsurance(i);
        carRepository.save(car);
        return insuranceRepository.save(i);
    }

    @Override
    public Insurance update(Insurance insurance, Long categoryId) {
        Car car = carRepository.findById(categoryId).orElse(null);
        insurance.setCar(car);
        return insuranceRepository.save(insurance);
    }

    @Override
    public void delete(long id) {
        insuranceRepository.deleteById(id);
    }

    @Override
    public List<Insurance> findAll() {
        return insuranceRepository.findAll();
    }

    @Override
    public Insurance findById(Long id) {
        return insuranceRepository.findById(id).orElse(null);
    }

}
