package tn.example.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Car;
import tn.example.services.CarService;

import java.util.List;


@RestController
@RequestMapping("/cars")
public class CarController {
    @Autowired
    CarService carService ;

    @GetMapping("/")
    public List<Car> getCars() {
        return carService.findAll() ;
    }

    @GetMapping("/{car_id}")
    public Car getCarById(@PathVariable("car_id") Long carId) {
        return carService.findById(carId) ;
    }

    @PostMapping("/")
    @ResponseBody
    public Car addCar(@RequestBody Car car) {
        return carService.add(car);
    }

    @DeleteMapping("/{car_id}")
    @ResponseBody
    public void removeCar(@PathVariable("car_id") Long carId) {
        carService.delete(carId);
    }

    @PutMapping("/")
    @ResponseBody
    public Car updateCar(@RequestBody Car car) {
        return carService.update(car) ;
    }
}
