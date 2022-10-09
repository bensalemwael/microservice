package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Departement;
import tn.example.entities.User;
import tn.example.repositories.DepartmentRepository;
import tn.example.repositories.UserRepository;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping("/departements")
public class DepartementController {
    @Autowired
    DepartmentRepository departmentRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/getalldepartements")
    public List<Departement> getdepartements()
    {
        return departmentRepository.findAll();
    }

    @PostMapping("/add")
    @ResponseBody
    public Departement addDepartement(@RequestBody Departement c) {
        Departement Departement = departmentRepository.save(c);
        return Departement;
    }

    @DeleteMapping("/remove-departement/{departements-id}")
    @ResponseBody
    public void removeDepartement(@PathVariable("departements-id") Long departementsId) {
        departmentRepository.deleteById(departementsId);
    }

    @PostMapping("/affectUserToDepartement/{user-id}/{departement-id}")
    @ResponseBody
    public Departement addUserToDepartement(@PathVariable("user-id") Long userId,@PathVariable("departement-id") Long departementId){
        User user=userRepository.findById(userId).orElse(null);
        Departement departement=departmentRepository.findById(departementId).orElse(null);
        user.setDepartement(departement);
        departement.getUsers().add(user);
        departmentRepository.save(departement);
        userRepository.save(user);
        return departement;
    }

    @GetMapping("/getUsersFromDepartement/{departement-id}")
    @ResponseBody
    public List<User> getUsersFromDepartement(@PathVariable("departement-id") Long departementId){
        Departement departement=departmentRepository.findById(departementId).orElse(null);
        return departement.getUsers();
    }

    @DeleteMapping ("/DeleteUserFromDepartement/{user-id}/{departement-id}")
    @ResponseBody
    public Departement DeleteUserFromDepartement(@PathVariable("user-id") Long userId,@PathVariable("departement-id") Long departementId){
        User user=userRepository.findById(userId).orElse(null);
        Departement departement=departmentRepository.findById(departementId).orElse(null);

        if( departement.getUsers().contains(user)){
            departement.getUsers().remove(user);
            user.setDepartement(null);
            userRepository.save(user);
            departmentRepository.save(departement);
        }

        return departement;
    }


}
