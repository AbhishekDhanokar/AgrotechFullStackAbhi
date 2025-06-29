import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private router: Router) { }

  // ✅ Reactive signal for main service content
  mainService = signal({
    title: 'Our Services',
    description: `We provide expert consultancy, crop monitoring, and precision farming solutions tailored to meet 
    the needs of modern agriculture. Our services aim to empower farmers with advanced tools and knowledge, ensuring 
    optimal crop yields, efficient resource management, and sustainable farming practices.`,
    image: 'assets/image/expert consultancy.jpg'
  });

  // ✅ Reactive list of sub-services
  serviceList = signal([
    {
      title: 'Expert Consultancy',
      description: 'Our agricultural experts provide tailored advice to optimize crop yields and farm management strategies.',
      image: 'assets/image/Expert Consultancy 2.jpg',
      contact: 'tel:+918408090391'
    },
    {
      title: 'Crop Monitoring',
      description: 'Utilize advanced technologies to monitor crop health and growth in real-time.',
      image: 'assets/image/Crop Monitoring.jpg'
    },
    {
      title: 'Precision Farming',
      description: 'Implement data-driven farming practices for efficient resource utilization and higher productivity.',
      image: 'assets/image/Precision Farming.jpg'
    },
    {
      title: 'Sustainable Farming',
      description: 'Adopt eco-friendly farming practices to promote sustainability and reduce environmental impact.',
      image: 'assets/image/Sustainable Farming.jpg'
    }
  ]);

}
