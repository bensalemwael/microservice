package tn.example.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("")
    public String getClients() {
        return "hello";
    }
}
