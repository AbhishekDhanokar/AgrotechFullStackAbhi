import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // 🔹 Send OTP to user's phone
  sendOtp(phone: string): Observable<any> {
    const body = { phone };
    return this.http.post(`${this.baseUrl}/send-otp`, body, {
      headers: this.headers,
      responseType: 'text' // Adjust based on what backend returns
    });
  }

  // 🔹 Direct registration (without OTP)
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user, { headers: this.headers });
  }

  // 🔹 OTP verification + registration
  verifyOtpAndRegister(user: any, otp: string): Observable<any> {
    const body = { ...user, otp };
    return this.http.post(`${this.baseUrl}/register`, body, { headers: this.headers });
  }

  // 🔹 Login
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data, { headers: this.headers });
  }
}
