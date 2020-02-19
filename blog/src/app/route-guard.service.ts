import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  storedToken : string;
  responseToken : string;
  constructor(private router: Router,private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) :boolean{
  	let loginFlag = false;
  	let localToken = localStorage.getItem("Auth-token");
  	let routerService = this.router;
  	return this.userService.getToken(localToken,undefined)
  	.then(function success(res){
  		if(res != undefined && "" != res){
  			localStorage.setItem("Auth-token",res);
        //routerService.navigate([state.url]);
  			loginFlag = true;
        return loginFlag;
  		}else{
  			routerService.navigate(["signIn"]);
        return false;
  		}
  	},function error(err){
  		routerService.navigate(["signIn"]);
      return false;
  	});
  }
}
