import { Education, Experience, Language } from '../class';

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  skills: Array<string>;
  experiences: Array<Experience>;
  educationList: Array<Education>;
  languages: Array<Language>;
}
