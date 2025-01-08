import { Block } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-solarcleaning',
  templateUrl: './solarcleaning.component.html',
  styleUrls: ['./solarcleaning.component.css']
})
export class SolarcleaningComponent {
  dis: string = "none";
  dis2: string = "none";

  showmsg(){
    this.dis = "block";
    this.dis2 = "none";
   
  }

  hidemsg(){
    this.dis = "none";
    this.dis2 = "block";
   
  }
  
}
