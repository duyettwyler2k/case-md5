import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageListComponent} from './page-list/page-list.component';
import {PageDetailComponent} from './page-detail/page-detail.component';



const routes: Routes = [
  {
    path: '',
    component: PageListComponent
  },
  {
    path: 'viewpage/:id',
    component: PageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}
