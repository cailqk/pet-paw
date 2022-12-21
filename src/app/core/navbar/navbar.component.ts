import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/authentication/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private userSub!: Subscription
  user: any
  isAuthenticated = false;

  constructor(private apiSerivce: ApiService, private authService: AuthService) {
   }

   ngOnInit(): void {
     this.userSub = this.apiSerivce.user.subscribe(user => {
       console.log(user);
       this.user! = user?.email;
       return this.isAuthenticated = !user ? false : true;
     });
   }

   ngOnDestroy(): void {
     this.userSub.unsubscribe()
   }

   onLogout() {
     this.apiSerivce.logUserOut();
   }

}
