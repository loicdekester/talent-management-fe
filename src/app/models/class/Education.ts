import { IEducation } from '../interfaces/IEducation';

export class Education implements IEducation {
  id?: number;
  school: string;
  degree: string;
  begining?: Date;
  end?: Date;

  constructor() {
    this.school = "";
    this.degree = "";
  }

}
