import { NgModule } from '@angular/core';
import { NoPreloading, Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'fruits', component: UserListComponent },
  { path: 'auth', component: LoginComponent },
  {path: '',redirectTo:'/fruits', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: NoPreloading,
    onSameUrlNavigation: "reload",
    paramsInheritanceStrategy: "always",
    relativeLinkResolution: "legacy",
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
