import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import {DataTablesModule} from 'angular-datatables';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginSingUpComponent } from './login-sing-up/login-sing-up.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UserComponent } from './user/user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerfyemailComponent } from './verfyemail/verfyemail.component';
import { VerifyemailForForgotComponent } from './verifyemail-for-forgot/verifyemail-for-forgot.component';
import { EmailsendComponent } from './emailsend/emailsend.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PartnerlistComponent,
    StudentListComponent,
    AddStudentComponent,
    LoginComponent,
    SignUpComponent,
    LoginSingUpComponent,
    UpdateStudentComponent,
    UserComponent,
    ForgotPasswordComponent,
    ResetpasswordComponent,
    VerfyemailComponent,
    VerifyemailForForgotComponent,
    EmailsendComponent,
    StudentdetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
