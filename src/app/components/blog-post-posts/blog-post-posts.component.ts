import { Component, Input } from '@angular/core';
import { AllPostsData } from 'src/app/models/script';

@Component({
  selector: 'app-blog-post-posts',
  templateUrl: './blog-post-posts.component.html',
  styleUrls: ['./blog-post-posts.component.css']
})
export class BlogPostPostsComponent {
  @Input() elements: AllPostsData[] = []
}
