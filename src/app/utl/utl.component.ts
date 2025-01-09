import { Component } from '@angular/core';

@Component({
  selector: 'app-utl',
  templateUrl: './utl.component.html',
  styleUrls: ['./utl.component.css']
})
export class UtlComponent {
  dis="none"
  dis1="none"
  dis2="none"
  dis3="none"
  
  a(){
    this.dis="block"
  
  }
  a1(){
    this.dis="none"
  }
  b(){
   
    this.dis1="block"
   
  }
  b1(){
    this.dis1="none"
  }
  c(){
   
    this.dis2="block"
    
  }
  c1(){
    this.dis2="none"
  }
  d(){
    
    this.dis3="block"
  }
  d1(){
    this.dis3="none"
  }


}
