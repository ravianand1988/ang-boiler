import { ContactUsComponent, AboutUsComponent, HomeComponent } from './pages';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'aboutus',
        component: AboutUsComponent,
    },
    {
        path: 'contactus',
        component: ContactUsComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class HomeRoutingModule {
}
