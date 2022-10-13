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
    public ResponseEntity<?> signup(@RequestBody @Valid AuthRequest request) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode(request.getPassword());
        User newUser = new User(request.getEmail(), password);
        User savedUser = userRepository.save(newUser);
        return ResponseEntity.ok().body(savedUser);
    }


    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody @Valid AuthRequest request) {
        try {
            Authentication authentication = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(), request.getPassword())
            );
            User user = (User) authentication.getPrincipal();
            System.out.println(user);
            String accessToken = jwtUtil.generateAccessToken(user);
            System.out.println(accessToken);
            AuthResponse response = new AuthResponse(user.getEmail(), accessToken);

            return ResponseEntity.ok().body(response);

        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
