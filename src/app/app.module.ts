import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { BrandComponent } from './brand/brand.component';
import { ShowBrandComponent } from './brand/show-brand/show-brand.component';
import { AddEditBrandComponent } from './brand/add-edit-brand/add-edit-brand.component';
import { ClassComponent } from './class/class.component';
import { AddEditClassComponent } from './class/add-edit-class/add-edit-class.component';
import { ShowClassComponent } from './class/show-class/show-class.component';

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
    StatisticComponent,
    BrandComponent,
    ShowBrandComponent,
    AddEditBrandComponent,
    ClassComponent,
    AddEditClassComponent,
    ShowClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DragDropModule,
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
