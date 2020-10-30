import { Education, Experience, Language } from '.';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  skills: Array<string>;
  experiences: Array<Experience>;
  educationList: Array<Education>;
  languages: Array<Language>;
}
