import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Errors, Experience } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public experienceForm: FormGroup;
  errors: Errors = { errors: {} };

  constructor(private userService: UserService, private router: Router) { }

  get jobTitle() { return this.experienceForm.get('jobTitle'); }
  get company() { return this.experienceForm.get('company'); }
  get location() { return this.experienceForm.get('location'); }
  get begining() { return this.experienceForm.get('begining'); }
  get end() { return this.experienceForm.get('end'); }
  get description() { return this.experienceForm.get('description'); }

  ngOnInit(): void {
    this.experienceForm = new FormGroup({
      jobTitle: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      begining: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    const experience: Experience = this.experienceForm.value;
    const user = this.userService.getCurrentUser();
    user.experiences.push(experience);
    this.userService.update(user).subscribe((user) => {
      console.log(`${user.firstName} ${user.lastName} updated successfully`);
    });
  }

}
