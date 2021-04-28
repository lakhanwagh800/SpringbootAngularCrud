import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logIn: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private _loginService: AuthService) { }

  ngOnInit(){
    this.logIn=this.fb.group({
      username:[''],
      password:['']
     });
  }
  onSubmit(data){
     this._loginService.logIn(data).subscribe((response) => {
       console.log(response.data.token);
       localStorage.setItem('token',response.data.token)
      this.router.navigate(['/view-student']);
    })
  
}
newregister(){
  this.router.navigate(['add-student']);
}

forgotpwd(){
  this.router.navigate(['/verifyemail-for-forgot']);
}
}
