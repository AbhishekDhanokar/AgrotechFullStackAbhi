// =============================
// ✅ Backend: AuthController.java
// =============================
package com.agrotech.AgrotechBackend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.agrotech.AgrotechBackend.dto.UserDTO;
import com.agrotech.AgrotechBackend.model.User;
import com.agrotech.AgrotechBackend.repository.UserRepository;
import com.agrotech.AgrotechBackend.service.TwilioService;
import com.agrotech.AgrotechBackend.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired private UserRepository userRepository;
    @Autowired private UserService userService;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private TwilioService twilioService;

    private final Map<String, String> otpStorage = new HashMap<>();

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO dto) {
        String sentOtp = otpStorage.get(dto.getPhone());
        if (sentOtp == null || !sentOtp.equals(dto.getOtp())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid or expired OTP"));
        }

        String result = userService.register(dto);
        otpStorage.remove(dto.getPhone());
        return ResponseEntity.ok(Map.of("message", result));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> req) {
        String email = req.get("email");
        String password = req.get("password");

        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return ResponseEntity.ok(user);
            }
        }
        return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
    }

    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(@RequestBody Map<String, String> request) {
        String phone = request.get("phone");
        if (phone == null || phone.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Phone number is required"));
        }

        String otp = String.valueOf(new Random().nextInt(900000) + 100000);
        otpStorage.put(phone, otp);

        try {
            twilioService.sendOtp(phone, otp);
            return ResponseEntity.ok(Map.of("message", "OTP sent to your number. Complete registration."));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("message", "Failed to send OTP"));
        }
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody Map<String, String> request) {
        String phone = request.get("phoneNumber");
        String otp = request.get("otp");

        if (otpStorage.containsKey(phone) && otpStorage.get(phone).equals(otp)) {
            return ResponseEntity.ok(Map.of("message", "OTP verified successfully"));
        }

        return ResponseEntity.status(400).body(Map.of("message", "Invalid OTP"));
    }
}
