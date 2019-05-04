import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string ="/api"

  allUser: any

  flag:boolean
  userExist: boolean
  constructor(private http:HttpClient) { }

  getAllUser():any{
  	return this.http.get(this.baseUrl+"/user/list")
  		.subscribe(data=>this.allUser=data);
  }

  saveUser(user):any{
  	return this.http.post(this.baseUrl+"/user/save",
  		{"username":user.username,"password":user.password,"email":user.email})
  	.toPromise();
  }

  existUser(user):any{
  	return this.http.post(this.baseUrl+"/user/exist",{"username":user.username,"password":user.password})
  	.toPromise();
  }
}
