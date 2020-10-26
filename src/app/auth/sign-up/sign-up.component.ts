import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor() {
  }

  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }


  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\?!@#\$%\^&\*]).{8,20}$/)]),
      passwordBis: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\?!@#\$%\^&\*]).{8,20}$/)])
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}
