import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 authUrl = 'http://localhost:55899/api/UserApi/';
 private currentUserSubject: BehaviorSubject<User>;
 public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
     }
     public get currentUserValue(): User {
      return this.currentUserSubject.value;
    }
    register(model: any){
    return this.http.post(this.authUrl + 'Register', model);
      }
      
    login(model: any){
    return this.http.post(this.authUrl + 'Login', model).pipe( map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
     }));
    }

}