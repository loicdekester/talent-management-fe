import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Errors } from 'src/app/models';
import { Language } from 'src/app/models/class';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  @Input() vernacular: Language;

  @Output() edit = new EventEmitter<Language>();
  @Output() delete = new EventEmitter<number>();

  public languageForm: FormGroup;
  public status: string = "SAVE";
  errors: Errors = { errors: {} };

  constructor(private userService: UserService, private router: Router) { }

  get language() { return this.languageForm.get('language'); }
  get speaking() { return this.languageForm.get('speaking'); }
  get reading() { return this.languageForm.get('reading'); }
  get writing() { return this.languageForm.get('writing'); }

  ngOnInit(): void {
    this.languageForm = new FormGroup({
      language: new FormControl(this.vernacular.language, [Validators.required]),
      speaking: new FormControl(this.vernacular.speaking, [Validators.required]),
      reading: new FormControl(this.vernacular.reading, [Validators.required]),
      writing: new FormControl(this.vernacular.writing, [Validators.required]),
    });
    if (this.vernacular.language) {
      this.status = "EDIT";
      this.languageForm.disable();
    }
  }

  onSubmit() {
    this.edit.emit(this.languageForm.value);
    this.status = "EDIT";
    this.languageForm.disable();
  }

  onEditClicked() {
    this.status = "SAVE";
    this.languageForm.enable();
  }

  onDeleteClicked() {
    this.delete.emit();
  }

}
