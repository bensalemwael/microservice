package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Department;
import tn.example.entities.User;
import tn.example.repositories.DepartmentRepository;
import tn.example.repositories.UserRepository;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping("/departments")
public class DepartmentController {
    @Autowired
    DepartmentRepository departmentRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public List<Department> getDepartments()
    {
        return departmentRepository.findAll();
    }

    @PostMapping("/")
    @ResponseBody
    public Department addDepartment(@RequestBody Department c) {
        Department department = departmentRepository.save(c);
        return department;
    }

    @DeleteMapping("/{departments-id}")
    @ResponseBody
    public void removeDepartment(@PathVariable("departments-id") Long departmentsId) {
        departmentRepository.deleteById(departmentsId);
    }

    @PostMapping("/affectUserToDepartment/{user-id}/{department-id}")
    @ResponseBody
    public Department addUserToDepartment(@PathVariable("user-id") Long userId, @PathVariable("department-id") Long departmentId){
        User user=userRepository.findById(userId).orElse(null);
        Department department = departmentRepository.findById(departmentId).orElse(null);
        user.setDepartement(department);
        department.getUsers().add(user);
        departmentRepository.save(department);
        userRepository.save(user);
        return department;
    }

    @GetMapping("/getUsersFromDepartment/{department-id}")
    @ResponseBody
    public List<User> getUsersFromDepartment(@PathVariable("department-id") Long departmentId){
        Department department = departmentRepository.findById(departmentId).orElse(null);
        return department.getUsers();
    }

    @DeleteMapping ("/DeleteUserFromDepartment/{user-id}/{department-id}")
    @ResponseBody
    public Department DeleteUserFromDepartment(@PathVariable("user-id") Long userId, @PathVariable("department-id") Long departmentId){
        User user=userRepository.findById(userId).orElse(null);
        Department department=departmentRepository.findById(departmentId).orElse(null);

        if( department.getUsers().contains(user)){
            department.getUsers().remove(user);
            user.setDepartement(null);
            userRepository.save(user);
            departmentRepository.save(department);
        }

        return department;
    }


}
