import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  id: any;
  post: any = [];
  ProfileForm: FormGroup;
  issue: any;
  constructor(private router: Router,  private route: ActivatedRoute, private blogService: BlogService, private fb: FormBuilder) { 
    this.ProfileForm = this.fb.group({
      firstName:  ['', Validators.required],
      lastName : ['', Validators.required],
      age : ['', Validators.required],
      bio : ['', Validators.required],
      gender : ['', Validators.required],      
    });

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.blogService.getProfile(this.id).subscribe(res => {
        this.issue = res;
        this.ProfileForm.get('firstName').setValue(this.issue[0].firstName);
        this.ProfileForm.get('lastName').setValue(this.issue[0].lastName);
        this.ProfileForm.get('age').setValue(this.issue[0].age);
        this.ProfileForm.get('bio').setValue(this.issue[0].bio);
        this.ProfileForm.get('gender').setValue(this.issue[0].gender);
        
      });
    });
  }

  onSubmit() {
    this.blogService.updateProfile(this.id, this.ProfileForm.value).subscribe(() => {
      this.router.navigate([`/profile/${this.id}`]);
    });
  }

}
