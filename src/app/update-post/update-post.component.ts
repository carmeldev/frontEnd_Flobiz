import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  id: any;
  post: any = [];
  commentForm: FormGroup;
  issue: any
  constructor(private router: Router,  private route: ActivatedRoute, private blogService: BlogService, private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      title:  ['', Validators.required],
      description : ['', Validators.required],
    });
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.blogService.getOnePost(this.id).subscribe(res => {
        this.issue = res;
        this.commentForm.get('title').setValue(this.issue[0].title);
        this.commentForm.get('description').setValue(this.issue[0].description);
        
      });
    });
  }

  onSubmit(){
    this.blogService.updatePost(this.id, this.commentForm.value).subscribe(() => {
      this.router.navigate([`/singlePost/${this.id}`]);
    });
  }

}
