import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import {AuthService} from '../../../app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    registerForm = new FormGroup({
    email: new FormControl(),
    password:  new FormControl(),
    Confirmpassword:  new FormControl(),

});

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private authservice: AuthService) { }

  ngOnInit(): void { }

  register(): void{
    const registerObserver = {
      next: x => console.log('user is created'),
      error: err => console.log('err')
    };
    this.authservice.register(this.registerForm.value).subscribe(registerObserver);
    this.router.navigate(['document-types']);
  }
}

