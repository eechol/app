import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { MessageComponent } from './message/message.component';
const routes: Routes = [
	{
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: IndexComponent,
        children:[
            {
            	path: 'user',
        	 	component:UserComponent
        	},
            {
            	path: 'message',
            	component: MessageComponent
            }
        ]
    },
	{
        path: 'signIn',
        component : SignInComponent
    },
    {
        path: 'signUp',
        component: SignUpComponent
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
