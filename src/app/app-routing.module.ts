import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { SolarlightComponent } from './solarlight/solarlight.component';
import { DcWireComponent } from './dc-wire/dc-wire.component';
import { UtlComponent } from './utl/utl.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'about', component:AboutComponent},
  {path:'form',component:FormComponent},
  {path:'solarlight',component:SolarlightComponent},
  {path:'dc-wire',component:DcWireComponent},
  {path:'utl',component:UtlComponent},
  {path:'**',component:HomeComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
