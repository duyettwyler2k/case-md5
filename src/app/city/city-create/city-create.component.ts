import {Component, OnInit} from '@angular/core';
import {CityService} from '../../city.service';
import {CountryService} from '../../country.service';
import {City} from '../../model/city';
import {Country} from '../../model/country';
import {NotificationService} from '../../notification.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

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
  selectedImg = null;
  imgSrc = '';

  constructor(private cityService: CityService,
              private countryService: CountryService,
              private notificationService: NotificationService,
              private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.showAllCountry();
  }


  showAllCountry() {
    this.countryService.showAll().subscribe(country => {
      this.country = country;
    });
  }


  createCity(cityForm) {
    if (this.selectedImg != null) {
      const filePath = `${this.selectedImg.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImg).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.imgSrc = url;
            this.city.image = url;
            this.isSubmitted = true;
            if (cityForm.valid) {
              this.cityService.createCity(this.city).subscribe(() => {
                this.notificationService.showSuccessMessage('ok ck oi');
              });
            } else {
              this.notificationService.showErrorMessage('khong on roi ck oi');
            }
          });
        })).subscribe();
    }
  }

  showPreview(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = event.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];

      if (this.selectedImg != null) {
        const filePath = `${this.selectedImg.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, this.selectedImg).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(url => {
              this.imgSrc = url;
            });
          })).subscribe();
      }

    } else {
      this.selectedImg = null;
    }
  }
}
