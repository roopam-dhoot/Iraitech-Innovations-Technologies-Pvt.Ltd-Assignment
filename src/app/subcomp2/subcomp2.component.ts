import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-subcomp2',
  templateUrl: './subcomp2.component.html',
  styleUrls: ['./subcomp2.component.css']
})
export class Subcomp2Component implements OnInit {
  @Input() 
  public childmessage:String   
  constructor() { }

  ngOnInit(): void {
  }

}
