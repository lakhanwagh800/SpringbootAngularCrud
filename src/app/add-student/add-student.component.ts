import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentservice:StudentService,private router: Router) {}

  student : Student=new Student();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }
  addStudentForm(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentservice
    .createStudent(this.student).subscribe(data => {
      console.log(data)
      this.student = new Student();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/login']);
  }
  
}
