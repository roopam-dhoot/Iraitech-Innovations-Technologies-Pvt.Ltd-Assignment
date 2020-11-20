import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-subcomp4',
  templateUrl: './subcomp4.component.html',
  styleUrls: ['./subcomp4.component.css']
})
export class Subcomp4Component implements OnInit {
  @Input() 
  public childmessage:String  
  constructor() { }

  ngOnInit(): void {

  }

}
