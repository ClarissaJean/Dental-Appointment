import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'getstarted',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'getstarted',
    loadChildren: () => import('./getstarted/getstarted.module').then( m => m.GetstartedPageModule)
  },
  {
    path: 'forgetpw',
    loadChildren: () => import('./forgetpw/forgetpw.module').then( m => m.ForgetpwPageModule)
  },
  {
    path: 'myinfo',
    loadChildren: () => import('./myinfo/myinfo.module').then( m => m.MyinfoPageModule)
  },
  {
    path: 'dentistinfo',
    loadChildren: () => import('./dentistinfo/dentistinfo.module').then( m => m.DentistinfoPageModule)
  },
  {
    path: 'clinicinfo',
    loadChildren: () => import('./clinicinfo/clinicinfo.module').then( m => m.ClinicinfoPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
