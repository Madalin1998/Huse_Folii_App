import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {

  public logForm: FormGroup;
  public email = '';
  public pass = '';

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.logForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      pass: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
      ])]
    });
   }

  ngOnInit(): void {
  }

  backToHome () {
    this.router.navigate(['./home']);
  }

  logUser () {
    console.log (this.logForm);
    this.router.navigate(['/admin']);
  }

}
