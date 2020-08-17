import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../app/services/user-api.service';
import { Observable,forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { Person } from 'src/app/interfaces/person';
import { User } from 'src/app/interfaces/user';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  retrievedPersons: Observable<Person[]>;

    loginForm = new FormGroup({
    email: new FormControl(),
    password:  new FormControl(),
});
  constructor(private userApiService: UserApiService,
              private router: Router,
              private authservice: AuthService) {}


  ngOnInit(): void {
    this.retrievedPersons = forkJoin([
      this.userApiService.getAllPersons(),
      this.userApiService.getAllUsers(),
    ]).pipe(
      map(([allPersons, allUsers]) => {
        return allPersons.map((person) => {
          const finded = allUsers.find(u => u.personId === person.id);
          return {
            user: finded,
            ...person
          };
        })
      })
    );
  }
 

 login(): void {

  const loginObserver = {
    next: x => console.log('user is logged in'),
    error: err => console.log(err),
  };
  this.authservice.login(this.loginForm.value).subscribe(loginObserver);

  this.router.navigate(['document-types']);

}

}
