import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  // Reactive content
  aboutText = signal(`At Agro-Tech, we are driven by a vision to revolutionize agriculture with cutting-edge technology and sustainable practices. Founded with a mission to empower farmers, we bring innovative solutions that bridge the gap between tradition and modernity. From precision farming to crop monitoring, our commitment is to enhance productivity while caring for the planet.`);

  mission = signal('To empower farmers with innovative tools and sustainable methods that drive efficiency and growth.');
  vision = signal('To lead the agricultural revolution by integrating technology and sustainability in farming.');
  values = signal('Innovation, sustainability, and farmer-centric solutions are at the heart of everything we do.');

  // Toggle visibility
  showMission = signal(true);
  showVision = signal(true);
  showValues = signal(true);

  toggle(section: 'mission' | 'vision' | 'values') {
    if (section === 'mission') this.showMission.update(v => !v);
    if (section === 'vision') this.showVision.update(v => !v);
    if (section === 'values') this.showValues.update(v => !v);
  }

  copyText(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert('✅ Copied to clipboard!');
    });
  }
}
