import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Education, Errors } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() education: Education;

  @Output() edit = new EventEmitter<Education>();
  @Output() delete = new EventEmitter<number>();

  public educationForm: FormGroup;
  public status: string = "SAVE";
  errors: Errors = { errors: {} };

  constructor(private userService: UserService, private router: Router) { }

  get school() { return this.educationForm.get('school'); }
  get degree() { return this.educationForm.get('degree'); }
  get begining() { return this.educationForm.get('begining'); }
  get end() { return this.educationForm.get('end'); }

  ngOnInit(): void {
    const begin = (this.education.begining) ? this.education.begining.toISOString().slice(0, -14) : undefined;
    const end = (this.education.end) ? this.education.end.toISOString().slice(0, -14) : undefined;
    this.educationForm = new FormGroup({
      school: new FormControl(this.education.school, [Validators.required]),
      degree: new FormControl(this.education.degree, [Validators.required]),
      begining: new FormControl(begin, [Validators.required]),
      end: new FormControl(end, [Validators.required]),
    });
    if (this.education.school) {
      this.status = "EDIT";
      this.educationForm.disable();
    }
  }

  onSubmit() {
    this.educationForm.value.begining = new Date(this.educationForm.value.begining);
    this.educationForm.value.end = new Date(this.educationForm.value.end);
    this.edit.emit(this.educationForm.value);
    this.status = "EDIT";
    this.educationForm.disable();
  }

  onEditClicked() {
    this.status = "SAVE";
    this.educationForm.enable();
  }

  onDeleteClicked() {
    this.delete.emit();
  }

}
