import { Education, Experience, Language } from '.';
import { IUser } from '../interfaces/IUser';
import { UserService } from '../../services';

export class User implements IUser {
  email: string = "";
  firstName: string = "";
  lastName: string = "";
  skills: Array<string> = [];
  experiences: Array<Experience> = [];
  educationList: Array<Education> = [];
  languages: Array<Language> = [];

  constructor(private userService: UserService) { }

  editExperience(experience: Experience, index: number) {
    this.experiences[index] = experience;
  }

  deleteExperience(index: number) {
    const experience = this.experiences.splice(index, 1);
    if (experience[0].id) {
      this.userService.deleteExperience(experience[0].id).subscribe();
    }
  }

  updateExperiences() {
    const updatedUser = this.userService.getCurrentUser();
    updatedUser.experiences = this.experiences;
    this.userService.update(updatedUser).subscribe(user => {
      console.log(`${user.firstName} ${user.lastName} updated successfully`);
    });
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

  updateEducation() {
    const updatedUser = this.userService.getCurrentUser();
    updatedUser.educationList = this.educationList;
    this.userService.update(updatedUser).subscribe(user => {
      console.log(`${user.firstName} ${user.lastName} updated successfully`);
    });
  }

  editLanguage(language: Language, index: number) {
    this.languages[index] = language;
  }

  deleteLanguages(index: number) {
    const language = this.languages.splice(index, 1);
    if (language[0].id) {
      this.userService.deletelanguages(language[0].id).subscribe();
    }
  }

  updateLanguages() {
    const updatedUser = this.userService.getCurrentUser();
    updatedUser.languages = this.languages;
    this.userService.update(updatedUser).subscribe(user => {
      console.log(`${user.firstName} ${user.lastName} updated successfully`);
    });
  }
}
