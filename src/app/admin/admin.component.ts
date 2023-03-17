import { Component } from '@angular/core';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
  constructor(private request: RequestService){}
  logOut() {
    this.request.logOut();
  }
}

