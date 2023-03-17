import { Component, Input } from '@angular/core';
import { AllPostsData } from 'src/app/models/script';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {
  @Input() elements: AllPostsData[] = [];
}
