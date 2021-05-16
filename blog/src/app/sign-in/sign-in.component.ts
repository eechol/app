import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }
  onSubmit(value){
    let routerService = this.router;
    let user = new User();
    user.username = value.username;
    user.password = value.password;
    this.userService.getToken(undefined,user)
      .then(function success(res){
        if( res != undefined && res != ""){
          // this is a comment
          let storedToken = res;
          localStorage.setItem("Auth-token",storedToken);
          routerService.navigate(["/index/user"]);
          return true;
        }else{
          routerService.navigate(["signIn"]);
          return false;
        }
      },function error(err){
        console.log("system error");
        routerService.navigate(["signIn"]);
        return false;
      });
  }
}
