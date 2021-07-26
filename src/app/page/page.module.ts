import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageListComponent } from './page-list/page-list.component';
import { PageDetailComponent } from './page-detail/page-detail.component';


@NgModule({
  declarations: [PageListComponent, PageDetailComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
