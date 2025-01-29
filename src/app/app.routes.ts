import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { DiningPageComponent } from './dining-page/dining-page.component';
import { RoomsPageComponent } from './rooms-page/rooms-page.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RoomDetailComponent } from './rooms-page/room-detail/room-detail.component';

import { BookingRequestComponent } from './booking/booking-request/booking-request.component';
import { TestComponent } from './test/test.component';
import { CleanerDashboardComponent } from './cleaner-dashboard/cleaner-dashboard.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { AuthGuard } from './services/auth.guard.service';
import { ReceptionistDashboardComponent } from './receptionist-dashboard/receptionist-dashboard.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleGuard } from '../role.guard';
import { BookingConfComponent } from './booking-conf/booking-conf.component';

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
        { path: 'booking', component: BookingRequestComponent,canActivate: [AuthGuard] },
        
        { 
          path: 'booking-confirmation', 
          component: BookingConfComponent,
          canActivate: [AuthGuard]
        },
        { path: 'login', component: LoginPageComponent },
        { path: 'suites-and-rooms/:id', component: RoomDetailComponent },
        // { path: 'booking-request/:roomId', component: BookingRequestComponent },
        { path: 'test', component: TestComponent },
        { 
          path: 'manager-dashboard', 
          component: ManagerDashboardComponent,
          canActivate: [AuthGuard],
          data: { role: 'manager' }
        },
        { 
          path: 'cleaner-dashboard', 
          component: CleanerDashboardComponent,
          canActivate: [AuthGuard],
          data: { role: 'cleaner' }
        },
        { 
          path: 'reception-dashboard', 
          component: ReceptionistDashboardComponent,
          canActivate: [AuthGuard],
          data: { role: 'receptionist' }
        },
        { 
          path: 'client-profile', 
          component: ClientProfileComponent,
          canActivate: [AuthGuard],
          data: { role: 'client' }
        }
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
    },
    {
      
        path: 'manager-dashboard',
        component: ManagerDashboardComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { role: 'manager' },
        children: [
          { path: '', redirectTo: 'employees', pathMatch: 'full' },
          { path: 'employees', component: EmployeeManagementComponent },
          { path: 'profile', component: ProfileComponent },
        ]
      
    }
  ];
