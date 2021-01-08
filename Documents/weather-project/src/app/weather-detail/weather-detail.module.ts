import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailComponent } from './weather-detail.component';
import { AppCommonModule } from '../common/app-common.module'
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailService } from './weather-detail.service';
import { FormsModule } from '@angular/forms';

const _routes: Routes = [
  {
    path: '', component: WeatherDetailComponent
  }
]

@NgModule({
  declarations: [WeatherDetailComponent],
  imports: [
    CommonModule, AppCommonModule, RouterModule.forChild(_routes), FormsModule
  ],
  providers: [WeatherDetailService]
})
export class WeatherDetailModule { }
