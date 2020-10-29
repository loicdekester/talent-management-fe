import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() experience: Experience;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  public experienceForm: FormGroup;
  public status: string = "SAVE";
  errors: Errors = { errors: {} };

  constructor(private userService: UserService, private router: Router) { }

  get jobTitle() { return this.experienceForm.get('jobTitle'); }
  get company() { return this.experienceForm.get('company'); }
  get location() { return this.experienceForm.get('location'); }
  get begining() { return this.experienceForm.get('begining'); }
  get end() { return this.experienceForm.get('end'); }
  get description() { return this.experienceForm.get('description'); }

  ngOnInit(): void {
    const begin = (this.experience.begining) ? this.experience.begining.toISOString().slice(0, -14) : undefined;
    const end = (this.experience.end) ? this.experience.end.toISOString().slice(0, -14) : undefined;
    this.experienceForm = new FormGroup({
      jobTitle: new FormControl(this.experience.jobTitle, [Validators.required]),
      company: new FormControl(this.experience.company, [Validators.required]),
      location: new FormControl(this.experience.location, [Validators.required]),
      begining: new FormControl(begin, [Validators.required]),
      end: new FormControl(end, [Validators.required]),
      description: new FormControl(this.experience.description, [Validators.required])
    });
    if (this.experience.jobTitle) {
      this.status = "EDIT";
      this.experienceForm.disable();
    }
  }

  onSubmit() {
    this.experienceForm.value.begining = new Date(this.experienceForm.value.begining);
    this.experienceForm.value.end = new Date(this.experienceForm.value.end);
    this.edit.emit(this.experienceForm.value);
    this.status = "EDIT";
    this.experienceForm.disable();
  }

  onEditClicked() {
    this.status = "SAVE";
    this.experienceForm.enable();
  }

  onDeleteClicked() {
    this.delete.emit();
  }

}
