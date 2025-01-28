import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { DiningPageComponent } from './dining-page/dining-page.component';
import { RoomsPageComponent } from './rooms-page/rooms-page.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RoomDetailComponent } from './rooms-page/room-detail/room-detail.component';
import { BookingComponent } from './booking/booking.component';
import { BookingRequestComponent } from './booking/booking-request/booking-request.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        { path: '', component: LandingPageComponent },
        { path: 'contact', component: ContactPageComponent },
        { path: 'suites-and-rooms', component: RoomsPageComponent },
        { path: 'dining', component: DiningPageComponent },
        { path: 'gallery', component: GalleryPageComponent },
        { path: 'booking', component: BookingComponent },
        { path: 'employee', component: EmployeeLoginComponent },
        { path: 'register', component: RegistrationPageComponent },
        { path: 'login', component: LoginPageComponent },
        { path: 'suites-and-rooms/:id', component: RoomDetailComponent },
        { path: 'booking-request/:roomId', component: BookingRequestComponent },
        { path: 'test', component: TestComponent }
        // other routes that need header and footer
      ]
    },
    {
      path: 'auth',
      component: AuthLayoutComponent,
      children: [
        { path: 'login', component: LoginPageComponent },
        { path: 'signup', component: SignupPageComponent },
      ]
    }
  ];
