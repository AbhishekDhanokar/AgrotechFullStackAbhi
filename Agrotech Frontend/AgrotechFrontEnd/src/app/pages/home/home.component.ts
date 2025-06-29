import { Component, signal } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, RouterModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Reactive data for features
  features = signal([
    {
      title: 'Smart Farming',
      description: 'Use advanced IoT devices to optimize your farming practices.',
      image: 'assets/image/Smart-farming.jpg',
      alt: 'Smart Farming'
    },
    {
      title: 'High-Quality Products',
      description: 'Get the best seeds, fertilizers, and equipment for your farm.',
      image: 'assets/image/Hight Quality Farming.jpg',
      alt: 'High-Quality Products'
    },
    {
      title: 'Expert Guidance',
      description: 'Access professional consultancy for crop and soil management.',
      image: 'assets/image/expert consultancy.jpg',
      alt: 'Expert Guidance'
    }
  ]);

  // Testimonials (can be fetched from backend later)
  testimonials = signal([
    {
      quote: "Agro-Tech helped me improve my farm's yield by 40%! The team is very supportive and their products are top-notch.",
      author: '- Rajesh Sharma, Farmer'
    },
    {
      quote: "Their IoT-based solutions have transformed the way I monitor and manage my crops. Highly recommended!",
      author: '- Priya Singh, Agriculturist'
    }
  ]);

  // Scroll to section
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Stubbed weather fetch
  fetchWeather() {
    const weatherEl = document.getElementById('weather-info');
    if (weatherEl) {
      weatherEl.innerHTML = `<p>🌤️ Weather: Sunny, 32°C<br>💧 Humidity: 45%<br>💨 Wind: 8 km/h</p>`;
    }
  }
} 
