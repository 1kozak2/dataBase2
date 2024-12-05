import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { DiningPageComponent } from './dining-page/dining-page.component';
import { RoomsPageComponent } from './rooms-page/rooms-page.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
   { path: '', component: LandingPageComponent },
   
  { path: 'contact', component: ContactPageComponent },
  { path: 'suites-and-rooms', component: RoomsPageComponent },
  { path: 'dining', component: DiningPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'reserve', component: ReservationPageComponent },
  { path: 'employee', component: EmployeeLoginComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },

];
