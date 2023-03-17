import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPostsData, JoinOurData } from 'src/app/models/script';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit{
  readNextDatas: AllPostsData[] = [];
  joinOurDatas: JoinOurData[] = [];
  allPostsDatas: AllPostsData[] = [];
  postsId: number = this.activeRoute.snapshot.params['id'];
  constructor(private request: RequestService, public activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.getReadNextData();
    this.getJoinOurData();
    this.getBlogPostsData();
  }
  getReadNextData() {
    this.request.getData<AllPostsData[]>(environment.allPostsUrl.get + '?_limit=3').subscribe((data) => {
      this.readNextDatas = data;
    })
  }
  getJoinOurData() {
    this.request.getData<JoinOurData[]>(environment.joinOurUrl.get).subscribe((data) => {
      this.joinOurDatas = data;
    })
  }
  getBlogPostsData() {
    this.request.getData<AllPostsData[]>(`${environment.allPostsUrl.get}/${this.postsId}`).subscribe((data) => {
      this.allPostsDatas = Array.isArray(data) ? data : [data];
    })
  }
}
