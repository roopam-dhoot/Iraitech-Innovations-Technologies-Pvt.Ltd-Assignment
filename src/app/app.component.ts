import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value:String
  title = 'iraitech-assignment';
  constructor() { }

  public onInput(a_oEvent): void {
    this.value = a_oEvent.currentTarget.value;
 }
}
  

