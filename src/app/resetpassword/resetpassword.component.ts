import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  newpassword:any;
  Confirmpassword:any;
  constructor(private router: Router,
    private userService:UserService) {
    }

  ngOnInit() {
  }

  resetpassword() {
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
