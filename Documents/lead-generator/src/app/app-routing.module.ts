import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./lead-generator/lead-generator.module').then(m => m.LeadGeneratorModule) },
  { path: 'listing', loadChildren: () => import('./lead-listing/lead-listing.module').then(m => m.LeadListingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
