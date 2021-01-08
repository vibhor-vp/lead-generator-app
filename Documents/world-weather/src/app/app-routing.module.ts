import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./country-list/country-list.module').then(m => m.WeatherListModule)
  },
  {
    path: 'weatherdetails',
    loadChildren: () => import('./weather-detail/weather-detail.module').then(m => m.WeatherDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
