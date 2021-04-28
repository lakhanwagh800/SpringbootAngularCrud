import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Observable,Subject } from "rxjs";
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor(private studentservice:StudentService,private router: Router) { }

  studentsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  students: Observable<Student[]>;
  student : Student=new Student();
  deleteMessage=false;
  studentlist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.studentservice.getStudentList().subscribe(data =>{
    this.students =data;
    this.dtTrigger.next();
    })
  }
  
  deleteStudent(id: number) {
    this.studentservice.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.studentservice.getStudentList().subscribe(data =>{
            this.students =data
            })
        },
        error => console.log(error));
  }


  updateStudent(id: number){
    this.studentservice.getStudent(id)
      .subscribe(
        data => {
          this.studentlist=data           
        },
        error => console.log(error));
  }

  studentupdateform=new FormGroup({
    student_id:new FormControl(),
    student_name:new FormControl(),
    student_email:new FormControl(),
    student_branch:new FormControl()
  });

  updateStu(updstu){
    this.student=new Student(); 
   this.student.id=this.StudentId.value;
   this.student.name=this.StudentName.value;
   this.student.email=this.StudentEmail.value;
   this.student.branch=this.StudentBranch.value;
   this.student.username=this.StudentUsername.value;
   this.student.password=this.StudentPassword.value;
   
   console.log(this.StudentBranch.value);
   

   this.studentservice.updateStudent(this.student.id,this.student).subscribe(
    data => {     
      this.isupdated=true;
      this.studentservice.getStudentList().subscribe(data =>{
        this.students =data
        })
    },
    error => console.log(error));
  }

  get StudentName(){
    return this.studentupdateform.get('student_name');
  }

  get StudentEmail(){
    return this.studentupdateform.get('student_email');
  }

  get StudentBranch(){
    return this.studentupdateform.get('student_branch');
  }

  get StudentId(){
    return this.studentupdateform.get('student_id');
  }
  get StudentUsername(){
    return this.studentupdateform.get('student_username');
  }
  get StudentPassword(){
    return this.studentupdateform.get('student_password');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
  StudentDetails(id:number){
    this.router.navigate(['/studentdetails',id]);
  }
}