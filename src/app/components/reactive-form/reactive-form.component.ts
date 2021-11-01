import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  /*registrationForm= new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postCode: new FormControl('')

    })
  })*/

  constructor(private fb:FormBuilder) { }

  registrationForm= this.fb.group({
    userName:['Vishwa', [Validators.required, Validators.minLength(3)]],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''],
      postCode:['']
    })
  })

  get userName(){
    return this.registrationForm.get('userName')!;
  }
  ngOnInit(): void {
  }

}
