import { Component } from '@angular/core';

@Component({
  selector: 'app-mc4connector',
  templateUrl: './mc4connector.component.html',
  styleUrls: ['./mc4connector.component.css']
})
export class Mc4connectorComponent {

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
