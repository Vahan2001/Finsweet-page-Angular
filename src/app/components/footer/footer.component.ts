import { Component } from '@angular/core';
import { MenuData } from 'src/app/models/script';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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
    },
    {
      label: 'Privacy Policy',
      url: '/policy'
    }
  ]
}
