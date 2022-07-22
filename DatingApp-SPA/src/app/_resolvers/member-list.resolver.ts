import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, Observable, of, throwError } from "rxjs";
import { User } from "../_models/user";
import { AlertifyService } from "../_services/alertify.service";
import { UserService } from "../_services/user.service";

@Injectable()
export class MemberListResolver implements Resolve<User[]>{
    resolve(route: ActivatedRouteSnapshot): Observable<User[]>{
        return this.userService.getUsers().pipe(
            catchError(() => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return throwError(() => new Error('Error')); 
                //return of(null);
            })
        );
        
    }

    /**
     *
     */
    constructor(private userService: UserService, private router: Router, 
        private alertify: AlertifyService) {       
        
    }
   
    }
    
