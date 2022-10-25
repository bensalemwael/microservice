package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Insurance;
import tn.example.services.InsuranceService;

import java.util.List;


@RestController
@RequestMapping("/insurances")
public class InsuranceController {

    @Autowired
    InsuranceService insuranceService ;

    @GetMapping("/")
    public List<Insurance> getInsurances() {
        return insuranceService.findAll() ;
    }

    @GetMapping("/{insurance_id}")
    public Insurance getInsuranceById(@PathVariable("insurance_id") Long insuranceId) {
        return insuranceService.findById(insuranceId) ;
    }

    @PostMapping("/{car_id}")
    @ResponseBody
    public Insurance addInsurance(@RequestBody Insurance insurance, @PathVariable("car_id") Long carId) {
        return insuranceService.add(insurance,carId);
    }

    @DeleteMapping("/{insurance_id}")
    @ResponseBody
    public void removeInsurance(@PathVariable("insurance_id") Long insuranceId) {
        insuranceService.delete(insuranceId);
    }

    @PutMapping("/{insurance_id}")
    @ResponseBody
    public Insurance updateInsurance(@RequestBody Insurance insurance, @PathVariable("insurance_id") Long insuranceId) {

        return insuranceService.update(insurance,insuranceId) ;
    }

}
