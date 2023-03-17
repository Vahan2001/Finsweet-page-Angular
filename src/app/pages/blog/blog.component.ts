import { Component, OnInit } from '@angular/core';
import { AllPostsData, ChooseData, JoinOurData } from 'src/app/models/script';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  chooseDatas: ChooseData[] = [];
  allPostsDatas: AllPostsData[] = [];
  joinOurDatas: JoinOurData[] = []
  i: number = 1;
  Xtotal: number = 1
  constructor(private request: RequestService) {}
  ngOnInit(): void {
    this.getChooseData();
    this.getAllPostsData();
    this.getJoinOurData();
    this.lengtAllPosts()
  }
  getChooseData() {
    this.request.getData<ChooseData[]>(environment.chooseUrl.get).subscribe((data) => {
      this.chooseDatas = data;
    })
  }
  getAllPostsData() {
    this.request.getData<AllPostsData[]>(environment.allPostsUrl.get + `?_page=${this.i}&_limit=5`).subscribe((data) => {
      this.allPostsDatas = data;
    })
  }
  getJoinOurData() {
    this.request.getData<JoinOurData[]>(environment.joinOurUrl.get).subscribe((data) => {
      this.joinOurDatas = data;
    })
  }
  lengtAllPosts(){
    this.request.getAdminDatas<AllPostsData[]>(environment.allPostsUrl.get + `?_page=${this.i}&_limit=5`).subscribe((item)=> {
      if(item.body !== null) {
        this.allPostsDatas = item.body
        this.Xtotal = Number(item.headers.get('X-Total-Count'))
      }
    })
  }
  nextPage(){
    if(this.i < this.Xtotal/5){
      ++this.i
      this.lengtAllPosts() 
      console.log(this.allPostsDatas);
    }      
  }
  prewPage() {
    if(this.i > 1) {
      this.i--
      this.getAllPostsData();
    }
  }
}
