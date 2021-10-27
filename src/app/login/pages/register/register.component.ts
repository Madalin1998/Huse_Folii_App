import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(40)])]
    });
  }

  ngOnInit(): void {
  }

  saveUser() {
    // if (this.regForm.controls.firstName.value === '') {
    //   var f_name = document.getElementById("f-name");
    //   f_name?.classList.add("is-invalid");
    // }
    // if (this.regForm.controls.lastName.value === '') {
    //   var l_name = document.getElementById("l-name");
    //   l_name?.classList.add("is-invalid");
    // }
    // if (this.regForm.controls.email.value === '') {
    //   var email = document.getElementById("email");
    //   email?.classList.add("is-invalid");
    // }
    // if (this.regForm.controls.password.value === '') {
    //   var password = document.getElementById("password");
    //   password?.classList.add("is-invalid");
    // }
    console.log(this.regForm);
  }

}

