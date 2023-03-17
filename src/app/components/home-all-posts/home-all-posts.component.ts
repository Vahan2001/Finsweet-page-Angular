import { Component, Input } from '@angular/core';
import { AllPostsData } from 'src/app/models/script';

@Component({
  selector: 'app-home-all-posts',
  templateUrl: './home-all-posts.component.html',
  styleUrls: ['./home-all-posts.component.css']
})
export class HomeAllPostsComponent {
  @Input() elements: AllPostsData[] = []
}
