import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SecondAreaComponent } from './second-area/second-area.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { ResultsComponent } from './results/results.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerMobileComponent } from './banner-mobile/banner-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SecondAreaComponent,
    AboutUsComponent,
    SpecialitiesComponent,
    ResultsComponent,
    ContactUsComponent,
    ContactPanelComponent,
    BannerMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
