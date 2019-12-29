import { SharedModule } from './../shared/shared.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, AboutUsComponent } from './pages';

@NgModule({
    declarations: [
        HomeComponent,
        AboutUsComponent,
        ContactUsComponent,
    ],
    imports: [
        HomeRoutingModule,
        SharedModule,
    ],
    providers: [],
    exports: [
    ],
})
export class HomeModule {
}
