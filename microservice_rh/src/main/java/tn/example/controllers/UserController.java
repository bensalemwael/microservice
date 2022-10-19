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





}
