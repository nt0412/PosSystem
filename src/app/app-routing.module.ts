import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatedPageManagerComponent } from './calculated-page-manager/calculated-page-manager.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'statistic', component: StatisticComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: '', component: CalculatedPageManagerComponent },
      { path: 'home', component: CalculatedPageManagerComponent },
      { path: 'calculate', component: CalculatedPageManagerComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
