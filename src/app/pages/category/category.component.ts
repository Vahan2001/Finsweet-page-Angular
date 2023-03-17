import { Component, OnInit } from '@angular/core';
import { AllPostsData, ChooseData } from 'src/app/models/script';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  allPostsDatas: AllPostsData[] = [];
  chooseDatas: ChooseData[] = [];

  constructor(private request: RequestService) { }
  ngOnInit(): void {
    this.getAllPostsData();
    this.getChooseData();
  }
  getAllPostsData() {
    this.request.getData<AllPostsData[]>(environment.allPostsUrl.get + '?_start=5&_end=9').subscribe((data) => {
      this.allPostsDatas = data;
    })
  };
  getChooseData() {
    this.request.getData<ChooseData[]>(environment.chooseUrl.get).subscribe((data) => {
      this.chooseDatas = data;
    })
  }
}
