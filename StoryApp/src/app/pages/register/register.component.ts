import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';


export class MyErrorStateMatcherService implements ErrorStateMatcher {
  isErrorState(control: FormControl | null,
    form: FormGroupDirective | NgForm | null):
    boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid &&
      (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Email validation
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // First name validation
  fnameFormControl = new FormControl ('', [
    Validators.maxLength(15),
    Validators.minLength(3),
    Validators.required
  ]);

  // Last name validation
  lnameFormControl = new FormControl ('', [
    Validators.maxLength(15),
    Validators.minLength(3),
    Validators.required
  ]);

  // Username validation
  usernameFormControl = new FormControl ('', [
    Validators.maxLength(15),
    Validators.minLength(5),
    Validators.required
  ]);

  matcher = new MyErrorStateMatcherService();

  constructor() { }

  ngOnInit() {
  }


}
