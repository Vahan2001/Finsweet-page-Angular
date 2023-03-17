import { Component, Input } from '@angular/core';
import { AuthorsData } from 'src/app/models/script';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent {
  @Input() elements: AuthorsData[] = [];
}
