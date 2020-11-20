import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-subcomp1',
  templateUrl: './subcomp1.component.html',
  styleUrls: ['./subcomp1.component.css']
})
export class Subcomp1Component implements OnInit {
  @Input() 
  public childmessage:String  
    constructor() { }

  ngOnInit(): void {
  }

}
