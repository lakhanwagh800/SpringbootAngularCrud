import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  newpassword:any;
  Confirmpassword:any;
  constructor(private route: ActivatedRoute,private router: Router,
    private userService:UserService) {
    }

  ngOnInit() {
  }

  forgotpassWord() {
    let body = {
    email:localStorage.getItem('email'),
    newPassword:this.newpassword,
    confirmPassword:this.Confirmpassword
    };
    this.userService
      .requestData('post', '/ChangePassword', body)
      .subscribe((res) => {
        console.log(res)
        if(res.code==200){
          localStorage.removeItem('email');
          
          this.router.navigate(['/login'])
        }else{
          alert(res.error.message)
        }
         
      
      });
    }

    

}
