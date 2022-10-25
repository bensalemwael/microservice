package tn.example.services;

import tn.example.entities.Car;

import java.util.List;

public interface ICarService {
    Car add(Car category) ;
    Car update(Car category);
    void delete(long id);
    List<Car> findAll();
    Car findById(Long id);
}
