import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { AppConfigService } from './app-config.service';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient,appConfig: AppConfigService) {
    this.usersUrl = appConfig.data.title;
  }

  public findAll(): Observable<User[]> {
  
    return this.http.get<User[]>(this.usersUrl);
  }
  ngOnInit() {
    this.http.get(this.usersUrl).subscribe(console.log);
  }

  public login(): Observable<string> {
    return this.http.get<string>("http://localhost:9090/rmi/login");
  }

}