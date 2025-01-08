import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { SolarcleaningComponent } from './solarcleaning/solarcleaning.component';
import { SolarlightComponent } from './solarlight/solarlight.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'about', component:AboutComponent},
  {path:'form',component:FormComponent},
  {path:'product',children:[
    {path:'solarcleaning', component:SolarcleaningComponent},
  {path:'solarlight',component:SolarlightComponent},
  ]},
  
  {path:'**',component:HomeComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
