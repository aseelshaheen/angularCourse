import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from "./top-header/top-header.component";
import { TopMenuComponent } from "./header/top-menu/top-menu.component";
import { MainMenuComponent } from "./header/main-menu/main-menu.component"; // Import HeaderComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, TopHeaderComponent, TopMenuComponent, MainMenuComponent] // Add HeaderComponent to the imports
 // Add HeaderComponent to the imports
 // Add HeaderComponent to the imports
 // Add HeaderComponent to the imports
})
export class AppComponent {
  title = 'angularCourse';
}
