import { Component, Input } from '@angular/core';
import { AllPostsData } from 'src/app/models/script';

@Component({
  selector: 'app-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.css']
})
export class ReadNextComponent {
  @Input() elements: AllPostsData[] = [];
}
