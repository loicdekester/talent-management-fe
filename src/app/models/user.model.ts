import { Education, Experience } from '.';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  skills: Array<string>;
  experiences: Array<Experience>;
  educationList: Array<Education>
}
