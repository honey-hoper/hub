import {Component, Input, OnInit} from '@angular/core';
import Job from '../../../models/Job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.sass']
})
export class JobCardComponent {
  @Input() job: Job;
}
