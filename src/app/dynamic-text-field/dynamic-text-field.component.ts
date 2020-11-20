import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-text-field',
  templateUrl: './dynamic-text-field.component.html',
  styleUrls: ['./dynamic-text-field.component.css']
})
export class DynamicTextFieldComponent implements OnInit {

  
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      
      phones: this.fb.array([
        this.fb.control(null)
      ])
    })
  }

  addPhone(): void {
    (this.userForm.get('phones') as FormArray).push(
      this.fb.control(null)
    );
  }

  removePhone(index) {
    (this.userForm.get('phones') as FormArray).removeAt(index);
  }

  getPhonesFormControls(): AbstractControl[] {
    return (<FormArray> this.userForm.get('phones')).controls
  }

  send(values) {
    console.log(values);
  }
  ngOnInit(): void {
  }
}
