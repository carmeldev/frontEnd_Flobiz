import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private blogService: BlogService) {
     this.login = this.fb.group({
      userName:  ['', Validators.required],
      password : ['', Validators.required],
      
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    //console.log(this.login.value);
    this.blogService.signin(this.login.value).subscribe((data) => {
      
      let user =  JSON.parse(JSON.stringify(data))
      
      console.log(user.length);
      if(user.length){
          localStorage.setItem('author',user[0].email);
          localStorage.setItem('id',user[0].id);
          console.log(user[0].email);
          
          this.router.navigate(['/home']);
      } else {
        alert("Enter Correct UserName and Password");
      }
      
    });
}

}
