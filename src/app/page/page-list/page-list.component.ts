import { Component, OnInit } from '@angular/core';
import {City} from '../../model/city';
import {CityService} from '../../city.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  city: City[] = [];
  constructor(private cityUser: CityService) { }

  ngOnInit() {
    this.showPageCity();
  }
  showPageCity() {
    this.cityUser.getAllCity().subscribe(city => {
      this.city = city;
    });
  }
}
