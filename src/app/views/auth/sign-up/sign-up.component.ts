import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  isAMatch: boolean = true;

  constructor(private router: Router, private userService: UserService) {
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
    if (this.signUpForm.value.password == this.signUpForm.value.passwordBis) {
      this.isAMatch = true;
      const credentials = {
        "email": this.signUpForm.value.email,
        "password": this.signUpForm.value.password
      }
      this.userService.register(credentials).subscribe((message) => {
        console.log(message);
        this.router.navigate(['sign-in']);
      });
    } else {
      this.isAMatch = false;
    }
  }

}
