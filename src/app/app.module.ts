import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SolarcleaningComponent } from './solarcleaning/solarcleaning.component';
import { ACDBDCDBComponent } from './acdb-dcdb/acdb-dcdb.component';
import { SolarlightComponent } from './solarlight/solarlight.component';
import { Mc4connectorComponent } from './mc4connector/mc4connector.component';
import { DcWireComponent } from './dc-wire/dc-wire.component';

import { FuseSpdComponent } from './fuse-spd/fuse-spd.component';
import { LAEarthingpageComponent } from './la-earthingpage/la-earthingpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    AboutComponent,
    FormComponent,
    SolarcleaningComponent,
    SolarlightComponent,
    Mc4connectorComponent,
    DcWireComponent,
    
    ACDBDCDBComponent,
    FuseSpdComponent,
    LAEarthingpageComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [provideAnimations(),{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
