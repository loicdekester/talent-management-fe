import { IExperience } from '../interfaces/IExperience';

export class Experience implements IExperience {
  id?: number;
  jobTitle: string;
  company: string;
  location: string;
  begining?: Date;
  end?: Date;
  description: string;

  constructor() {
    this.jobTitle = "";
    this.company = "";
    this.location = "";
    this.description = "";
  }

}
