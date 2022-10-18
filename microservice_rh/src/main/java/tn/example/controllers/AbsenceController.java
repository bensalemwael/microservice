package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Absence;
import tn.example.entities.User;
import tn.example.repositories.AbsenceRepository;
import tn.example.repositories.UserRepository;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping("/absences")
public class AbsenceController {

    @Autowired
    AbsenceRepository absenceRepository ;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    @ResponseBody
    public List<Absence> getAbsenses()
    {
        return absenceRepository.findAll();
    }

    @GetMapping("/{user_id}")
    @ResponseBody
    public List<Absence> getAbsencePerUser(@PathVariable("user_id") Long userId){
        User user=userRepository.findById(userId).orElse(null);
        return user.getAbsences();
    }

    @PostMapping("/{user_id}")
    @ResponseBody
    public User addAbsenceToUser(@PathVariable("user_id") Long userId , @RequestBody Absence absence){
        Absence ab = absenceRepository.save(absence) ;
        User user=userRepository.findById(userId).orElse(null);
        user.getAbsences().add(ab);
        userRepository.save(user);
        ab.setUser(user);
        absenceRepository.save(absence);
        return user;
    }

    @DeleteMapping("/{user_id}/{absence_id}")
    @ResponseBody
    public User removeAbsence(@PathVariable("user_id") Long userId , @PathVariable("absence_id") Long absenceId){
        User user=userRepository.findById(userId).orElse(null);
        Absence absence = absenceRepository.findById(absenceId).orElse(null);
        user.getAbsences().remove(absence);
        absenceRepository.delete(absence);
        userRepository.save(user);
        return user;
    }

}
