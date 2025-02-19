import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from "./utils/theme-toggle/theme-toggle.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { LoadingComponent } from "./utils/loading/loading.component";
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, ThemeToggleComponent, FooterComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'blue-city-code-app';
  selectedSection: string = 'home';
  showSidebar: boolean = false;

  constructor() {
    console.log('Environment:', environment);
  }

  showSection(section: string) {
    this.selectedSection = section;
  }

  onThemeChange(test: string) {
    console.log("test");
  }
}