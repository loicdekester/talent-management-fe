import { Component, OnInit } from '@angular/core';
import { Education, Experience, Language, User } from 'src/app/models/class';
import { UserService } from 'src/app/services'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  languages: Array<Language> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  addBlankForm(type: string) {
    switch (type) {
      case "Experience":
        this.user.experiences.unshift(new Experience);
        break;
      case "Education":
        this.user.educationList.unshift(new Education);
        break;
      case "Language":
        this.languages.unshift(new Language);
        break;
      default:
        break;
    }
  }

  editExperience(experience: Experience, index: number) {
    this.user.editExperience(experience, index);
  }

  deleteExperience(index: number) {
    this.user.deleteExperience(index);
  }

  editEducation(education: Education, index: number) {
    this.user.editEducation(education, index);
  }

  deleteEducation(index: number) {
    this.user.deleteEducation(index);
  }

  editLanguage(language: Language, index: number) {
    this.user.editLanguage(language, index);
  }

  deletelanguages(index: number) {
    this.user.deleteLanguages(index);
  }

  updateUser() {
    this.userService.update(this.userService.getCurrentUser()).subscribe(user => {
      console.log(`${user.firstName} ${user.lastName} updated successfully`);
    });
  }

}
