import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { ACDBDCDBComponent } from './acdb-dcdb/acdb-dcdb.component';
import { SolarcleaningComponent } from './solarcleaning/solarcleaning.component';
import { SolarlightComponent } from './solarlight/solarlight.component';
import { Mc4connectorComponent } from './mc4connector/mc4connector.component';
import { DcWireComponent } from './dc-wire/dc-wire.component';

import { FuseSpdComponent } from './fuse-spd/fuse-spd.component';
import { LAEarthingpageComponent } from './la-earthingpage/la-earthingpage.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'about', component:AboutComponent},
  {path:'enquiry',component:FormComponent},
  {path:'product',children:[
    {path:'solarcleaning', component:SolarcleaningComponent},
  {path:'solarlight',component:SolarlightComponent},
  {path :'AcdbDcdb', component: ACDBDCDBComponent },
  {path:'mc4connector', component:Mc4connectorComponent},
  {path:'dc-wire',component:DcWireComponent},
  
  {path: 'fuseSpd', component:FuseSpdComponent},
  {path:'la-earthing',component:LAEarthingpageComponent},
  ]},
  
  {path:'**',component:HomeComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
