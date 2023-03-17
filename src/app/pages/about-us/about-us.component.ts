import { Component, OnInit } from '@angular/core';
import { AuthorsData, JoinOurData } from 'src/app/models/script';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  authorsDatas: AuthorsData[] = [];
  joinOurDatas: JoinOurData[] = []
  constructor(private request: RequestService) { }
  ngOnInit(): void {
    this.getAuthorsData();
    this.getJoinOurData()
  }
  getAuthorsData() {
    this.request.getData<AuthorsData[]>(environment.authorsUrl.get).subscribe((data) => {
      this.authorsDatas = data;
    })
  }
  getJoinOurData() {
    this.request.getData<JoinOurData[]>(environment.joinOurUrl.get).subscribe((data) => {
      this.joinOurDatas = data;
    })
  }

}
