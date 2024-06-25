import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() public title: string = '';
  showSection = false;
  
  constructor(private router: Router) {
  }

  public navigateTo(route: string): void{
    this.router.navigate([route]);
  }

  toggleSection() {
    this.showSection = !this.showSection;
  }

  closeSection(event: MouseEvent) {
    // Cierra la sección solo si el clic es fuera de la sección superpuesta
    if ((event.target as HTMLElement).classList.contains('overlay')) {
      this.showSection = false;
    }
  }
}
