import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {GlobalState} from "./global.state";
import { ContentHeaderComponent } from './content-header/content-header.component';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DashboardComponent,
    TopnavComponent,
    SidebarComponent,
    PageNotFoundComponent,
    ContentHeaderComponent,
    MenuToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    GlobalState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
