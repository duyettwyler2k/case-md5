import {Component, OnInit} from '@angular/core';
import {CityService} from '../../city.service';
import {ActivatedRoute} from '@angular/router';
import {City} from '../../model/city';
import {CountryService} from '../../country.service';
import {Country} from '../../model/country';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  city: City = {};
  country: Country[] = [];

  constructor(private cityService: CityService,
              private activatedRoute: ActivatedRoute,
              private countryService: CountryService,
              private notificationService: NotificationService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getById(id);
    });
  }

  ngOnInit() {
    this.showAllCountry();
  }

  getById(id) {
    this.cityService.getById(id).subscribe(city => {
      this.city = city;
    });
  }

  showAllCountry() {
    this.countryService.showAll().subscribe(country => {
      this.country = country;
    });
  }

  updateCity(id) {
    this.cityService.editCity(this.city, id).subscribe(() => {
     this.notificationService.showSuccessMessage('Ok CK');
    });
  }

}
