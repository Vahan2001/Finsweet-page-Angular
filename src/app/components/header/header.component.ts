import { Component } from '@angular/core';
import { MenuData } from 'src/app/models/script';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuArr: MenuData[] = [
    {
      label: 'Home',
      url: '/home'
    },
    {
      label: 'Blog',
      url: '/blog'
    },
    {
      label: 'About Us',
      url: '/aboutus'
    },
    {
      label: 'Contact Us',
      url: '/contact'
    }
  ]
}
