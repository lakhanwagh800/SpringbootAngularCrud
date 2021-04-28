import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-verfyemail',
  templateUrl: './verfyemail.component.html',
  styleUrls: ['./verfyemail.component.css']
})
export class VerfyemailComponent implements OnInit {
  email:any;

  constructor(private router:Router, private user : UserService) { }

  ngOnInit(): void {
  }
  verfyEmail() {
      let body = {
        email: this.email,
      };
      this.user
        .requestData('post', '/veryfyEmail', body)
        .subscribe((res) => {
          //console.log(res)
          if(res.code==200){
            localStorage.setItem('email',this.email)

            alert("Email verify Sucessfully")
            this.router.navigate(['/resetpassword'])
          }else{
            alert(res.error.message)
          }
           
        
        });
    }
 
  
}