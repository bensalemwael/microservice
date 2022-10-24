package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Department;
import tn.example.externMicroservices.models.User;
import tn.example.externMicroservices.services.UserServiceClient;
import tn.example.repositories.DepartmentRepository;

import java.util.List;


@RestController
@RequestMapping("/departments")
public class DepartmentController {
    @Autowired
    DepartmentRepository departmentRepository;
    UserServiceClient userServiceClient;

    public DepartmentController( UserServiceClient userServiceClient){
        this.userServiceClient = userServiceClient;
    }
    @GetMapping("/")
    public List<Department> getDepartments()
    {
        return departmentRepository.findAll();
    }

    @PostMapping("/addDepartment")
    @ResponseBody
    public Department addDepartment(@RequestBody Department c) {
        Department department = departmentRepository.save(c);
        return c;
    }

    @GetMapping("/{department-id}")
    public Department getDepartmentById(@PathVariable("department-id") Long departmentId)
    {
        return departmentRepository.findById(departmentId).orElse(null);
    }

    @DeleteMapping("/{departments-id}")
    @ResponseBody
    public void removeDepartment(@PathVariable("departments-id") Long departmentsId) {
        departmentRepository.deleteById(departmentsId);
    }

    @PostMapping("/affectUserToDepartment/{user-id}/{department-id}")
    @ResponseBody
    public User addUserToDepartment(@PathVariable("user-id") Long userId, @PathVariable("department-id") Long departmentId){
        User user=userServiceClient.getUserById(userId);
        Department department = departmentRepository.findById(departmentId).orElse(null);
        userServiceClient.AffectToDepartment(user.getUserId(),departmentId);
        return user;
    }

    @PutMapping("/{department-id}")
    public Department updateDepartmentById(@PathVariable("department-id") Long departmentId,@RequestBody Department c)
    {
        Department d =  departmentRepository.findById(departmentId).orElse(null);
        d.setDepartmentName(c.getDepartmentName());
        departmentRepository.save(d) ;
        return d ;
    }


}
