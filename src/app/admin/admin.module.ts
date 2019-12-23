import {
    AdminComponent,
    DashboardComponent,
    RightsComponent,
    UserComponent,
} from './pages';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
 declarations: [
     AdminComponent,
     DashboardComponent,
     RightsComponent,
     UserComponent,
 ],
 imports: [
     AdminRoutingModule,
 ],
 providers: [],
})

export class AdminModule {
}
