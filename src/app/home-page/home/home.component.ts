import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { TopMenuComponent } from '../../header/top-menu/top-menu.component';
import { MainMenuComponent } from '../../header/main-menu/main-menu.component';
import { TopHeaderComponent } from "../../top-header/top-header.component";


@Component({
  selector: 'home',
  standalone: true,
  imports: [HeaderComponent,
    TopMenuComponent, 
    MainMenuComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {}

