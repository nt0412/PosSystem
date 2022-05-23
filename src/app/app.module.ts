import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CalculatedPageManagerComponent } from './calculated-page-manager/calculated-page-manager.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModalFilterComponent } from './calculated-page-manager/modal-filter/modal-filter.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { StatisticComponent } from './statistic/statistic.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBarComponent,
    CalculatedPageManagerComponent,
    PageNotFoundComponent,
    ModalFilterComponent,
    InventoryComponent,
    SearchAreaComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    DragDropModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
