import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  RegisterForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private blogService: BlogService) {
     this.RegisterForm = this.fb.group({
      firstName:  ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      age : ['', Validators.required],
      bio : ['', Validators.required],
      gender : ['', Validators.required],      
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.RegisterForm.value);
    this.blogService.addUser(this.RegisterForm.value).subscribe(() => {
      this.router.navigate(['/login']);
      alert("User Created Successfully")
    });
}

}
