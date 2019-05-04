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
    let user = new User();
    user.username = value.username;
    user.password = value.password;
    this.userService.existUser(user)
    .then(function success(res){
      let data = JSON.stringify(res);
      if(data == "true"){
        this.router.navigate(["/index/user"]);
      }else{
        this.router.navigate(["signIn"])
      }
    },function error(){
      alert("system error");
    })
  }
}
