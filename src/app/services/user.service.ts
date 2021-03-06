import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { User } from '../models/class/User';
import { map, distinctUntilChanged, take } from 'rxjs/operators';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService) { }

  initUser() {
    this.apiService.get('/users').subscribe(
      data => {
        data.user.experiences.map((e: any) => {
          e.begining = new Date(e.begining);
          e.end = new Date(e.end);
        });
        data.user.educationList.map((e: any) => {
          e.begining = new Date(e.begining);
          e.end = new Date(e.end);
        });
        this.setUser(data.user)
      },
      err => this.purgeAuth()
    );
  }

  register(credentials: any): Observable<any> {
    return this.apiService.post('/users', { user: credentials });
  }

  attemptAuth(credentials: any): Observable<User> {
    return this.apiService.post('/users/signin', { user: credentials })
      .pipe(map(
        data => {
          data.user.experiences.map((e: any) => {
            e.begining = new Date(e.begining);
            e.end = new Date(e.end);
          });
          data.user.educationList.map((e: any) => {
            e.begining = new Date(e.begining);
            e.end = new Date(e.end);
          });
          this.setUser(data.user);
          return data;
        }
      ));
  }

  setUser(user: User) {
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user: User): Observable<User> {
    return this.apiService
      .put('/users', { user })
      .pipe(map(data => {
        data.user.experiences.map((e: any) => {
          e.begining = new Date(e.begining);
          e.end = new Date(e.end);
        });
        data.user.educationList.map((e: any) => {
          e.begining = new Date(e.begining);
          e.end = new Date(e.end);
        });
        this.currentUserSubject.next(data.user);
        return data.user;
      }));
  }

  deleteExperience(id: number): Observable<any> {
    return this.apiService
      .delete(`/experiences/${id}`)
      .pipe(map((data) => { console.log(data); return data; }))
  }

  deleteEducation(id: number): Observable<any> {
    return this.apiService
      .delete(`/educations/${id}`)
      .pipe(map((data) => { console.log(data); return data; }))
  }

  deletelanguages(id: number): Observable<any> {
    return this.apiService
      .delete(`/languages/${id}`)
      .pipe(map((data) => { console.log(data); return data; }))
  }

  logout(): Observable<any> {
    this.purgeAuth();
    return this.apiService.get('/users/logout');
  }

  purgeAuth() {
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

}
