import {Component, OnInit} from '@angular/core';
import {CityService} from '../../city.service';
import {ActivatedRoute} from '@angular/router';
import {City} from '../../model/city';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  city: City = {};

  constructor(private cityService: CityService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getById(id);
    });
  }

  ngOnInit() {
  }

  getById(id) {
    this.cityService.getById(id).subscribe(city => {
      this.city = city;
    });
  }

}
