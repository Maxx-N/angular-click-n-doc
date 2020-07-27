import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../app/services/user-api.service';
import { Observable,forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { Person } from 'src/app/interfaces/person';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  retrievedPersons: Observable<Person[]>;

  constructor(private userApiService: UserApiService) {}

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
}
