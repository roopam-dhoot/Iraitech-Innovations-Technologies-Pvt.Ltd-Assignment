import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  index:any
  series=[2,3,10,15,26,35,50,63]
  value:any;
  constructor() { }

  ngOnInit(): void {
  }
  getvalue(){
    if(this.index%2==0){
this.value=this.index*this.index-1
    }
   else{
    this.value=this.index*this.index+1
   }
  }

}
