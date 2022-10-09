package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.User;
import tn.example.repositories.UserRepository;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository userRepository;


    @GetMapping("/getall")
    public List<User> getusers() {
        return userRepository.findAll();
    }

    @PostMapping("/add")
    @ResponseBody
    public User addClient(@RequestBody User c) {
        User user = userRepository.save(c);
        return user;
    }

    @DeleteMapping("/remove-user/{user-id}")
    @ResponseBody
    public void removeClient(@PathVariable("user-id") Long userId) {
        userRepository.deleteById(userId);
    }





}
