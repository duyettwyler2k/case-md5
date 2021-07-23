import {Component, OnInit} from '@angular/core';
import {CityService} from '../../city.service';
import {City} from '../../model/city';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  city: City[] = [];

  constructor(private cityUser: CityService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.deleteCity(id);
    });
  }

  ngOnInit() {
    this.showAllCity();
  }

  showAllCity() {
    this.cityUser.getAllCity().subscribe(city => {
      this.city = city;
    });
  }

  deleteCity(id) {
    this.cityUser.deleteById(id).subscribe(() => {
      alert('Ok');
      this.showAllCity();
    });

  }
}
