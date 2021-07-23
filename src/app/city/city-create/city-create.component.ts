import {Component, OnInit} from '@angular/core';
import {CityService} from '../../city.service';
import {CountryService} from '../../country.service';
import {City} from '../../model/city';
import {Country} from '../../model/country';
import {NotificationService} from '../../notification.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  city: City = {};
  country: Country[] = [];
  isSubmitted = false;

  constructor(private cityService: CityService,
              private countryService: CountryService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.showAllCountry();
  }

  createCity(cityForm) {
    this.isSubmitted = true;
    if (cityForm.valid) {
      this.cityService.createCity(this.city).subscribe(() => {
        this.notificationService.showSuccessMessage('ok ck oi');
      });
    } else {
      this.notificationService.showErrorMessage('khong on roi ck oi');
    }
  }

  showAllCountry() {
    this.countryService.showAll().subscribe(country => {
      this.country = country;
    });
  }
}
