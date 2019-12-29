
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repos } from '../../models';

@Injectable()
export class GitHubService {
   baseURL = 'https://api.github.com/';

   constructor(private http: HttpClient) {
   }

   getRepos(userName: string): Observable<Repos[]> {
        return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos');
   }
}
