import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import {CityListComponent} from './city-list/city-list.component';
import {CityDetailComponent} from './city-detail/city-detail.component';
import {CityCreateComponent} from './city-create/city-create.component';
import {CityEditComponent} from './city-edit/city-edit.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CityListComponent,
    CityDetailComponent,
    CityCreateComponent,
    CityEditComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    FormsModule
  ]
})
export class CityModule { }
