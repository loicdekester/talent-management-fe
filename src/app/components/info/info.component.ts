import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Errors } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public infoForm: FormGroup;
  errors: Errors = { errors: {} };

  constructor(private userService: UserService, private router: Router) { }

  get firstName() { return this.infoForm.get('firstName'); }
  get lastName() { return this.infoForm.get('lastName'); }

  ngOnInit(): void {
    this.infoForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    const user = this.userService.getCurrentUser();
    user.firstName = this.infoForm.value.firstName;
    user.lastName = this.infoForm.value.lastName
    this.userService.update(user).subscribe((user) => {
      console.log(`${user.firstName} ${user.lastName} updated successfully`);
      //this.router.navigate(['sign-in']);
    });
  }

}
