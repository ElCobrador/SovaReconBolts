import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapSelectionComponent } from './map-selection/map-selection.component';
import { SiteSelectionComponent } from './site-selection/site-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    MapSelectionComponent,
    SiteSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
