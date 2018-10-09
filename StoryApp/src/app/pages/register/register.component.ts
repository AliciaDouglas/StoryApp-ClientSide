import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// import { MyErrorStateMatcherService } from './../../my-error-state-matcher.service';
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

  // emailFormControl;
  // matcher;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcherService();

  constructor() { }

  ngOnInit() {
  }


  // emailErrorMessage () {
  // emailFormControl = new FormControl ('', [
  //     Validators.required,
  //     Validators.email,
  //   ]);
  // matcher = new MyErrorStateMatcherService();
  // }

}
