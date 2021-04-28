import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-emailsend',
  templateUrl: './emailsend.component.html',
  styleUrls: ['./emailsend.component.css']
})
export class EmailsendComponent implements OnInit {
  email:any;
  constructor(private user:UserService,private router:Router) { }

  ngOnInit() {
  }
  sentEmail(){
    let body = {
      email: this.email,
    };
    this.user
      .requestData('post', '/sendEmail', body)
      .subscribe((res) => {
        if(res.code==200){
          localStorage.setItem('email',this.email)
          alert("Email send Sucessfully")
          this.router.navigate(['/forgot-password'])
        }else{
          alert("Enter a valid email")
        }
      });
  }
}
