import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginData = { email: '', password: '' };
  showPassword = false;
  loginError = '';

  constructor(private authService: AuthService, private router: Router) { }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.authService.login(this.loginData).subscribe({
      next: (res: any) => {
        // Save user info or token as needed
        console.log('Login success', res);
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/home']); // Navigate after login
      },
      error: (err) => {
        this.loginError = 'Invalid email or password';
      },
    });
  }
}

