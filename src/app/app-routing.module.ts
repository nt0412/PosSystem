import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatedPageManagerComponent } from './calculated-page-manager/calculated-page-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'statistic', component: PageNotFoundComponent },
      { path: 'inventory', component: PageNotFoundComponent },
      { path: '', component: CalculatedPageManagerComponent },
      { path: 'home', component: CalculatedPageManagerComponent },
      { path: 'calculate', component: CalculatedPageManagerComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
