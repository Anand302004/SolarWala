import { Component } from '@angular/core';

@Component({
  selector: 'app-la-earthingpage',
  templateUrl: './la-earthingpage.component.html',
  styleUrls: ['./la-earthingpage.component.css']
})
export class LAEarthingpageComponent {
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
