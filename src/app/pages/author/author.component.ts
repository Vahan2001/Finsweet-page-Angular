import { Component, OnInit } from '@angular/core';
import { AllPostsData } from 'src/app/models/script';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit{
  allPostsDatas: AllPostsData[] = [];
  constructor(private request: RequestService) { }
  ngOnInit(): void {
    this.getAllPostsData();
  }
  getAllPostsData() {
    this.request.getData<AllPostsData[]>(environment.allPostsUrl.get + '?_start=10&_end=12').subscribe((data) => {
      this.allPostsDatas = data;
    })
  }
}
