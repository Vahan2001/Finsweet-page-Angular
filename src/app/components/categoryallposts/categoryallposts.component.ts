import { Component, Input } from '@angular/core';
import { AllPostsData } from 'src/app/models/script';

@Component({
  selector: 'app-categoryallposts',
  templateUrl: './categoryallposts.component.html',
  styleUrls: ['./categoryallposts.component.css']
})
export class CategoryallpostsComponent {
  @Input() elements: AllPostsData[] = [];
}
