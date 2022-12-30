import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user-service.service';
import { LoginComponent } from './login/login.component';
import { APP_INITIALIZER } from '@angular/core';
import {  AppConfigService }       from './service/app-config.service';
// import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService, 
    LoginComponent,AppConfigService, 
    { provide: APP_INITIALIZER, useFactory: (config: AppConfigService) => () => config.load(), deps: [AppConfigService], multi: true },
    // {provide: APP_BASE_HREF, useValue: '/uui'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
