import { Component, OnInit } from '@angular/core';
import { Repos, GitHubService } from 'src/app/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {

  userName = 'angular';
  repos: Repos[];

  loading = false;
  errorMessage;

    constructor(private githubService: GitHubService) {
    }

    public getRepos() {
        this.loading = true;
        this.errorMessage = '';
        this.githubService.getRepos(this.userName)
            .subscribe(
              (response) => { this.repos = response; },
              (error) => { this.errorMessage = error; this.loading = false; },
              () => {this.loading = false;
            });
    }

}
