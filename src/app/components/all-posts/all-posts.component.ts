import { Component, Input } from '@angular/core';
import { AllPostsData } from 'src/app/models/script';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
  @Input() elements: AllPostsData[] = [];
}
