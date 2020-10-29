import { Experience } from './experience.model';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  skills: Array<string>;
  experiences: Array<Experience>;
}
