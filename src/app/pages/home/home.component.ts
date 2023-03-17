import { Component, OnInit } from '@angular/core';
import { ChooseData, AuthorsData, JoinOurData, HomeAllPostsData, AllPostsData } from 'src/app/models/script';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{ 
  chooseDatas: ChooseData[] = [];
  authorsDatas: AuthorsData[] = [];
  joinOurDatas: JoinOurData[] = [];
  onePostDatas: AllPostsData[] = [];
  allPostDatas: AllPostsData[] = [];
  constructor(private request: RequestService) { }
  ngOnInit(): void {
    this.getChooseData();
    this.getAuthorsData();
    this.getJoinOurData();
    this.getOnePost();
    this.getAllPost();
  }
  getChooseData() {
    this.request.getData<ChooseData[]>(environment.chooseUrl.get).subscribe((data) => {
      this.chooseDatas = data;
    })
  }
  getAuthorsData() {
    this.request.getData<AuthorsData[]>(environment.authorsUrl.get + '?_limit=4').subscribe((data) => {
      this.authorsDatas = data;
    })
  }
  getJoinOurData() {
    this.request.getData<JoinOurData[]>(environment.joinOurUrl.get).subscribe((data) => {
      this.joinOurDatas = data;
    })
  }
  getOnePost() {
    this.request.getData<AllPostsData[]>(environment.allPostsUrl.get + '?_start=9&_end=10').subscribe((data) => {
      this.onePostDatas = data;
    })
  }
  getAllPost() {
    this.request.getData<AllPostsData[]>(environment.allPostsUrl.get + '?_limit=4').subscribe((data) => {
      this.allPostDatas = data;
    })
  }
}
