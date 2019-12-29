import { GitHubService } from 'src/app/core';
import { RepoListComponent } from './pages';
import { GithubRoutingModule } from './github-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

@NgModule({
    declarations: [
        RepoListComponent,
    ],
    imports: [
        GithubRoutingModule,
        SharedModule,
    ],
    providers: [
        GitHubService,
    ],
    exports: [

    ]
})
export class GithubModule {
}
