import { Component, Input } from '@angular/core';
import { ChooseData } from 'src/app/models/script';

@Component({
  selector: 'app-choose-category',
  templateUrl: './choose-category.component.html',
  styleUrls: ['./choose-category.component.css']
})
export class ChooseCategoryComponent {
  @Input() elements: ChooseData[] = [];
}
