package tn.example.security.auth;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tn.example.entities.User;
import tn.example.repositories.UserRepository;
import tn.example.security.JwtTokenUtil;

import javax.validation.Valid;

@RestController
public class AuthApi {
    @Autowired
    AuthenticationManager authManager;
    @Autowired
    JwtTokenUtil jwtUtil;
    @Autowired
    UserRepository userRepository;

    @PostMapping("/auth/signup")
    public ResponseEntity<?> signup(@RequestBody @Valid AuthRequestSignup request) {
        ResponseEntity<?> response = null;
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode(request.getPassword());
        if (userRepository.findByEmail(request.getEmail()).isPresent()==false) {
            User newUser = new User(request.getFirstName(), request.getLastName(), request.getEmail(), request.getRole(), password);
            User savedUser = userRepository.save(newUser);
            response=ResponseEntity.ok().body(savedUser);
        }
        else {
            System.out.println("here");
            response= ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("user already exists");
        }
        return response;
    }


    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody @Valid AuthRequestLogin request) {
        try {
            Authentication authentication = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(), request.getPassword())
            );
            User user = (User) authentication.getPrincipal();
            String accessToken = jwtUtil.generateAccessToken(user);
            System.out.println(accessToken);
            AuthResponse response = new AuthResponse(user.getEmail(), accessToken,user.getRole());

            return ResponseEntity.ok().body(response);

        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
