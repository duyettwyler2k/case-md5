import {Component, OnInit} from '@angular/core';
import {CityService} from '../../city.service';
import {City} from '../../model/city';
import {ActivatedRoute} from '@angular/router';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  city: City[] = [];

  constructor(private cityUser: CityService,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService) {
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
      this.notificationService.showSuccessMessage('Ok Ck');
      this.showAllCity();
    });

  }
}
