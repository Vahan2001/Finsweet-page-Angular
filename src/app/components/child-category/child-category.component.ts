import { Component, Input } from '@angular/core';
import { ChooseData } from 'src/app/models/script';

@Component({
  selector: 'app-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.css']
})
export class ChildCategoryComponent {
  @Input() elements: ChooseData[] = [];
}
