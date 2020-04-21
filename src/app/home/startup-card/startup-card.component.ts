import {Component, Input, OnInit} from '@angular/core';
import Startup from '../../../models/Startup';

@Component({
  selector: 'app-startup-card',
  templateUrl: './startup-card.component.html',
  styleUrls: ['./startup-card.component.sass']
})
export class StartupCardComponent {
  @Input() startup: Startup;
}
