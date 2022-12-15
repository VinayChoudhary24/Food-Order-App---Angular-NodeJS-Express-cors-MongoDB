import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Inject UserService to Check if the User is Logged In Or Not
  // Inject Router to Redirect
  constructor( private userService: UserService, private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Check the State of the User
    // User is Available
    if(this.userService.currentUser.email) return true;
    // User is Not Logged In
    this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}})
    return false;
  }
  
}
