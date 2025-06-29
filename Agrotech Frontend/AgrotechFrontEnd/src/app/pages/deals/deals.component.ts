import { Component, computed, signal } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-deals',
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {
  // Reactive signal to hold all deals
  allDeals = signal([
    {
      name: 'Smart Irrigation Kit',
      discount: 25,
      image: 'assets/image/Smart Irrigation Kit.jpg',
      description: 'Save 25% on our advanced irrigation kits designed to conserve water and boost efficiency.',
      stock: true
    },
    {
      name: 'Soil Test Kit',
      discount: 30,
      image: 'assets/image/Soil Test Kit.jpg',
      description: 'Get a 30% discount on soil test kits to optimize your crop yields.',
      stock: true
    },
    {
      name: 'Drone Monitoring Package',
      discount: 40,
      image: 'assets/image/Drone Monitoring Package.webp',
      description: 'Exclusive 40% off on drone monitoring packages for large-scale farming.',
      stock: false
    },
    {
      name: 'Fertilizer Combo Pack',
      discount: 20,
      image: 'assets/image/Fertilizer Combo Pack.jpg',
      description: 'Save up to 20% on our all-in-one fertilizer combo packs for better growth.',
      stock: true
    }
  ]);

  // Signal for minimum discount filter
  minDiscount = signal(0);

  // Computed deals (filtered by discount and stock)
  filteredDeals = computed(() =>
    this.allDeals().filter(deal => deal.discount >= this.minDiscount() && deal.stock)
  );

  // Set minimum discount filter
  setDiscountFilter(value: number) {
    this.minDiscount.set(value);
  }

  // Buy function
  buyNow(dealName: string) {
    alert(`✅ "${dealName}" added to your cart!`);
  }
}
