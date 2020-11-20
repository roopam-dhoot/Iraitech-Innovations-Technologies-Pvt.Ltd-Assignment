import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-subcomp3',
  templateUrl: './subcomp3.component.html',
  styleUrls: ['./subcomp3.component.css']
})
export class Subcomp3Component implements OnInit {
  @Input() 
  public childmessage:String  

  constructor() { }

  ngOnInit(): void {
  }

}
