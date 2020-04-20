import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  categories;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.categories = this.dataService.getCategories();
  }

}
