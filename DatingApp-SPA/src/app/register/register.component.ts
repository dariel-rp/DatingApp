import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {  
  @Output() cancelRegister = new EventEmitter<boolean>();
  model: any ={};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe({ 
    next: () => console.log('registration successful'),
    error: (e) => console.log(e)
  });
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
