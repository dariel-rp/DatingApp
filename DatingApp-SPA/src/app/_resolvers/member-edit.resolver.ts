import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, Observable, of, throwError } from "rxjs";
import { User } from "../_models/user";
import { AlertifyService } from "../_services/alertify.service";
import { AuthService } from "../_services/auth.service";
import { UserService } from "../_services/user.service";

@Injectable()
export class MemberEditResolver implements Resolve<User>{
    resolve(route: ActivatedRouteSnapshot): Observable<User>{
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(() => {
                this.alertify.error('Problem retrieving your data');
                this.router.navigate(['/members']);
                return throwError(() => new Error('Error')); 
                //return of(null);
            })
        );
        
    }

    /**
     *
     */
    constructor(private userService: UserService, private authService: AuthService,
        private router: Router, private alertify: AlertifyService) {       
        
    }
   
    }
    
