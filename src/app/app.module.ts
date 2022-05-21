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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBarComponent,
    CalculatedPageManagerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
