package com.agrotech.AgrotechBackend.service;

import com.agrotech.AgrotechBackend.dto.UserDTO;
import com.agrotech.AgrotechBackend.model.User;
import com.agrotech.AgrotechBackend.repository.UserRepository;
import com.agrotech.AgrotechBackend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired private UserRepository userRepository;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private JwtUtil jwtUtil;
    @Autowired private TwilioService twilioService; // ✅ Add Twilio service to send OTP

    public String register(UserDTO dto) {
        if (userRepository.findByEmail(dto.getEmail()).isPresent()) {
            return "User already exists";
        }

        // ✅ Generate 6-digit OTP
        String otp = String.valueOf((int)(Math.random() * 900000) + 100000);

        // ✅ Send OTP to phone
        twilioService.sendOtp(dto.getPhone(), otp);

        // ✅ Save user info (you can save OTP in DB if you want to verify later)
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setName(dto.getName());
        user.setPhone(dto.getPhone());
        user.setState(dto.getState());
        user.setDistrict(dto.getDistrict());
        user.setTypeOfFarming(dto.getTypeOfFarming());
        user.setLandArea(dto.getLandArea());
        user.setPreferredLanguage(dto.getPreferredLanguage());
        userRepository.save(user);

        return "OTP sent to your number. Complete registration.";
    }

    public String login(UserDTO dto) {
        User user = userRepository.findByEmail(dto.getEmail()).orElse(null);
        if (user != null && passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
            return jwtUtil.generateToken(dto.getEmail());
        }
        return "Invalid username or password";
    }
}
