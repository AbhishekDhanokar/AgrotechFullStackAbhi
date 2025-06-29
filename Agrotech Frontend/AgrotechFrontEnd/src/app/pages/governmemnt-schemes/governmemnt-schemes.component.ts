import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-government-schemes',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './governmemnt-schemes.component.html',
  styleUrls: ['./governmemnt-schemes.component.css']
})
export class GovernmentSchemesComponent {

  openPMKisan() {
    window.open('https://pmkisan.gov.in/', '_blank');
  }

  openPMFBY() {
    window.open('https://pmfby.gov.in/', '_blank');
  }

  openSMAM() {
    window.open('https://agrimachinery.nic.in/', '_blank');
  }

  openPMKSY() {
    window.open('https://pmksy.gov.in/', '_blank');
  }
}
