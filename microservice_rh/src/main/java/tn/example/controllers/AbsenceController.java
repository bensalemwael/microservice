package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Absence;
import tn.example.externMicroservices.models.User;
import tn.example.externMicroservices.services.UserServiceClient;
import tn.example.repositories.AbsenceRepository;

import java.util.List;


@RestController
@RequestMapping("/absences")
public class AbsenceController {

    @Autowired
    AbsenceRepository absenceRepository ;
   UserServiceClient userServiceClient;

    public AbsenceController( UserServiceClient userServiceClient){
        this.userServiceClient = userServiceClient;
    }



    @GetMapping("/{user_id}")
    @ResponseBody
    public List<Absence> getAbsencePerUser(@PathVariable("user_id") Long userId){
        User user=userServiceClient.getUserById(userId);
        return absenceRepository.findAllByuserId(userId);
    }

    @PostMapping("/{user_id}")
    @ResponseBody
    public Absence addAbsenceToUser(@PathVariable("user_id") Long userId , @RequestBody Absence absence){
        User user=userServiceClient.getUserById(userId);
        if(user!=null){
            absence.setUserId(user.getUserId());
            absenceRepository.save(absence) ;
            return absence;
        }
        return null;
    }
    @DeleteMapping("/{user_id}/{absence_id}")
    @ResponseBody
    public String removeAbsence(@PathVariable("user_id") Long userId , @PathVariable("absence_id") Long absenceId){
        User user=userServiceClient.getUserById(userId);
        absenceRepository.deleteAbsencesByUserid(user.getUserId());
        return "absence delete from the specified user";
    }

}
