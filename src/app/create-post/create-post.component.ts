import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private blogService: BlogService) {
     this.postForm = this.fb.group({
      title:  ['', Validators.required],
      description : ['', Validators.required],
      imageUrl : '',
      author : '',
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.postForm.value);
    this.postForm.value.author = localStorage.getItem('author');

    this.blogService.addPost(this.postForm.value).subscribe(() => {
        this.router.navigate(['/home']);
      
    });
}

}
