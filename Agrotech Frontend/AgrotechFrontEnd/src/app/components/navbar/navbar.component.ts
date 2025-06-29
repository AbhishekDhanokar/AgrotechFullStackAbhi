import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Reactive logo signal
  logoPath = signal('assets/images/Logo.png');
  logoAlt = signal('Agro-Tech Logo');

  // Reactive navigation links
  navLinks = signal([
    { label: 'Home', route: '/home', isRouterLink: true },
    { label: 'Products', route: '/products', isRouterLink: true },
    { label: 'Services', route: '/services', isRouterLink: true },
    { label: 'Deals', route: '/deals', isRouterLink: true },
    { label: 'About Us', route: '/about', isRouterLink: true },
    { label: 'Government Schemes', route: '/governmemnt-schemes', isRouterLink: true },
    { label: 'login/Signup', route: '/login', isRouterLink: true }
  ]);
}
