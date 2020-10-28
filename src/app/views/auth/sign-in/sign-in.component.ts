import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services';
import { Errors } from '../../../models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  errors: Errors = { errors: {} };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.errors = { errors: {} };
    const credentials = this.signInForm.value;
    this.userService.attemptAuth(credentials).subscribe(
      data => this.router.navigateByUrl(''),
      err => {
        this.errors = err;
      }
    );
  }

}
