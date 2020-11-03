import { Component, OnInit } from '@angular/core';
import { Education, Experience, Language } from 'src/app/models/class';
import { UserService } from 'src/app/services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  experienceList: Array<Experience> = [];
  educationList: Array<Education> = [];
  languages: Array<Language> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.experienceList = this.userService.getCurrentUser().experiences;
    this.educationList = this.userService.getCurrentUser().educationList;
    if (this.experienceList.length < 1) {
      this.addExperience();
    }
    if (this.educationList.length < 1) {
      this.addEducation();
    }
  }

  addBlankForm(type: string) {
    switch (type) {
      case "Experience":
        this.experienceList.push(new Experience);
        break;
      case "Education":
        this.educationList.push(new Education);
        break;
      case "Language":
        this.languages.push(new Language);
        break;
      default:
        break;
    }
  }

  addExperience() {
    this.experienceList.push(new Experience);
  }

  editExperience(experience: Experience, index: number) {
    this.experienceList[index] = experience;
  }

  deleteExperience(index: number) {
    const experience = this.experienceList.splice(index, 1);
    if (experience[0].id) {
      this.userService.deleteExperience(experience[0].id).subscribe();
    }
  }

  updateUserExperiences() {
    const updatedUser = this.userService.getCurrentUser();
    updatedUser.experiences = this.experienceList;
    this.userService.update(updatedUser).subscribe(user => {
      console.log(`${user.firstName} ${user.lastName} updated successfully`);
    });
  }

  addEducation() {
    const newEducation: Education = {
      school: "",
      degree: "",
      begining: undefined,
      end: undefined,
    }
    this.educationList.push(newEducation);
  }

  editEducation(education: Education, index: number) {
    this.educationList[index] = education;
  }

  deleteEducation(index: number) {
    const education = this.educationList.splice(index, 1);
    if (education[0].id) {
      this.userService.deleteEducation(education[0].id).subscribe();
    }
  }

  updateUserEducation() {
    const updatedUser = this.userService.getCurrentUser();
    updatedUser.educationList = this.educationList;
    this.userService.update(updatedUser).subscribe(user => {
      console.log(`${user.firstName} ${user.lastName} updated successfully`);
    });
  }

  addLanguage() {
    const newLanguage: Language = {
      language: "",
      speaking: 0,
      reading: 0,
      writing: 0,
    }
    this.languages.push(newLanguage);
  }

  editLanguage(language: Language, index: number) {
    this.languages[index] = language;
  }

  deletelanguages(index: number) {
    const language = this.languages.splice(index, 1);
    if (language[0].id) {
      this.userService.deletelanguages(language[0].id).subscribe();
    }
  }

  updateUserLanguage() {
    const updatedUser = this.userService.getCurrentUser();
    updatedUser.languages = this.languages;
    this.userService.update(updatedUser).subscribe(user => {
      console.log(`${user.firstName} ${user.lastName} updated successfully`);
    });
  }

}
