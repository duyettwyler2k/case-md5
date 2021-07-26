import { Component, OnInit } from '@angular/core';
import {City} from '../../model/city';
import {CityService} from '../../city.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  city: City = {};

  constructor(private cityService: CityService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getByIdPage(id);
    });
  }

  ngOnInit() {
  }

  getByIdPage(id) {
    this.cityService.getById(id).subscribe(city => {
      this.city = city;
    });
  }

}
