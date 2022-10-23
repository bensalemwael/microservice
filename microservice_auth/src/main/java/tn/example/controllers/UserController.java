package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.User;
import tn.example.repositories.UserRepository;

import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository userRepository;


    @GetMapping("/")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/")
    @ResponseBody
    public User addUser(@RequestBody User c) {
        User user = userRepository.save(c);
        return user;
    }

    @DeleteMapping("/{user-id}")
    @ResponseBody
    public void removeUser(@PathVariable("user-id") Long userId) {
        userRepository.deleteById(userId);
    }


    @GetMapping("/{user-id}")
    @ResponseBody
    public User findById(@PathVariable("user-id") Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    @PutMapping("/AffectToDepartment/{user-id}/{department-id}")
    @ResponseBody
    public User AffectToDepartment(@PathVariable("user-id") Long userId,@PathVariable("department-id") Long departmentId) {
        User user=userRepository.findById(userId).orElse(null);
        user.setDepartementid(departmentId);
        return userRepository.save(user);
    }

    @GetMapping("/getUsersFromDepartment/{department-id}")
    @ResponseBody
    public List<User> getUsersFromDepartment(@PathVariable("department-id") Long departmentId){
        return userRepository.findAllBydepartementid(departmentId);
    }


    @PutMapping ("/RemoveDepartmentFromUser/{user-id}")
    @ResponseBody
    public User DeleteUserFromDepartment(@PathVariable("user-id") Long userId){
        User user=userRepository.findById(userId).orElse(null);
        user.setDepartementid(null);
        userRepository.save(user);
        return user;
    }

}
