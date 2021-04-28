import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-verifyemail-for-forgot',
  templateUrl: './verifyemail-for-forgot.component.html',
  styleUrls: ['./verifyemail-for-forgot.component.css']
})
export class VerifyemailForForgotComponent implements OnInit {
  email:any;
  errorMessage = 'Invalid Credentials';
  constructor(private router:Router, private user : UserService) { }

  ngOnInit(): void {
  }
  verifyEmailForForgat() {
      let body = {
        email: this.email,
      };
      this.user
        .requestData('post', '/veryfyEmail', body)
        .subscribe((res) => {
          if(res.code==200){
            localStorage.setItem('email',this.email)
            alert("Email verify Sucessfully")
            this.router.navigate(['/forgot-password'])
          }else{
            alert("Enter a valid email")
          }
        });
    }
}
