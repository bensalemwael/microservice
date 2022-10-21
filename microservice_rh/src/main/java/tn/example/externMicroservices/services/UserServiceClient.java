package tn.example.externMicroservices.services;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import tn.example.externMicroservices.models.User;


@FeignClient(name = "user-microservice",url = "http://localhost:8888/users")
public interface UserServiceClient {

    @GetMapping("/{user_id}")
    User getUserById(@PathVariable Long user_id);

    @PutMapping("/AffectToDepartment/{user-id}/{department-id}")
    User AffectToDepartment (@PathVariable("user-id") Long userId,@PathVariable("department-id") Long departmentId);

}
