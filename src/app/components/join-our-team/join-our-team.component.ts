import { Component, Input } from '@angular/core';
import { JoinOurData } from 'src/app/models/script';

@Component({
  selector: 'app-join-our-team',
  templateUrl: './join-our-team.component.html',
  styleUrls: ['./join-our-team.component.css']
})
export class JoinOurTeamComponent {
  @Input() elements: JoinOurData[] = [];
}
