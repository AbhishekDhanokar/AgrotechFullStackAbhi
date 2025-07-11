package com.agrotech.AgrotechBackend.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class TwilioService {

    @Value("${twilio.account_sid}")
    private String accountSid;

    @Value("${twilio.auth_token}")
    private String authToken;

    @Value("${twilio.phone_number}")
    private String twilioPhone;

    public void sendOtp(String toPhoneNumber, String otp) {
        Twilio.init(accountSid, authToken);

        Message.creator(
            new com.twilio.type.PhoneNumber(toPhoneNumber),
            new com.twilio.type.PhoneNumber(twilioPhone),
            "Your OTP is: " + otp
        ).create();
        System.out.println("Twilio sending to: " + toPhoneNumber + " | OTP: " + otp);

    }
    
}
