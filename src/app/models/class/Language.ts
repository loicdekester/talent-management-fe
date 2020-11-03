import { ILanguage } from '../interfaces/ILanguage';

export class Language implements ILanguage {
  id?: number;
  language: string;
  speaking: number;
  reading: number;
  writing: number;

  constructor() {
    this.language = "";
    this.speaking = 0;
    this.reading = 0;
    this.writing = 0;
  }

}
