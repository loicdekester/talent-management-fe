import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models';
import { UserService } from 'src/app/services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  experienceList: Array<Experience> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.experienceList = this.userService.getCurrentUser().experiences;
  }

  addExperience() {
    const newExperience = {
      jobTitle: "",
      company: "",
      location: "",
      begining: undefined,
      end: undefined,
      description: ""
    }
    this.experienceList.push(newExperience);
  }

  editExperience(experience: Experience, index: number) {
    this.experienceList[index] = experience;
  }

  deleteExperience(index: number) {
    const experience: any = this.experienceList.splice(index, 1);
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

}
