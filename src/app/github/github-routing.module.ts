import { RepoListComponent } from './pages';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: 'github',
        component: RepoListComponent,
        children: [
            {
                path: 'list',
                component: RepoListComponent,
            },
        ]
    },
];

@NgModule({
imports: [
    RouterModule.forChild(routes),
],
exports: [
    RouterModule,
],
})
export class GithubRoutingModule {}
