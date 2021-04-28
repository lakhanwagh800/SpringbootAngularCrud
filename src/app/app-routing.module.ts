import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginComponent } from './login/login.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerfyemailComponent } from './verfyemail/verfyemail.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerifyemailForForgotComponent } from './verifyemail-for-forgot/verifyemail-for-forgot.component';
import { EmailsendComponent } from './emailsend/emailsend.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes = [
 
  {path:'',component:LoginComponent},
  {path:'view-student',component:StudentListComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'update/:id',component:UpdateStudentComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'verfyemail',component:VerfyemailComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'verifyemail-for-forgot',component:VerifyemailForForgotComponent},
  {path:'emailsend',component:EmailsendComponent},
  {path:'studentdetails/:id',component:StudentdetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
