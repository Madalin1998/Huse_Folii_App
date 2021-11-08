import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regForm: FormGroup;
  public f_Name = '';
  public l_Name = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.regForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
      ])]
    });
  }

  ngOnInit(): void {
  }

  saveUser() {
    this.f_Name = this.regForm.controls.firstName.value;
    this.l_Name = this.regForm.controls.lastName.value;
    localStorage.setItem('emmail', this.regForm.controls.email.value);
    localStorage.setItem('password', this.regForm.controls.password.value);
    this.router.navigate(['/home']);
  }

  getHome () {
    this.router.navigate(['/home']);
  }

  backToLogin () {
    this.router.navigate(['/login']);
  }

}

