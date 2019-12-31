import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  id: any;
  post: any;
  commentVal: string = '';
  comments: any = [];
  constructor(private router: Router, private route: ActivatedRoute,private blogService: BlogService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.blogService.getOnePost(this.id).subscribe(res => {
        this.post = res[0];
        console.log(this.post);
      });
    });

    this.blogService.getComments(this.id).subscribe(data => {
        this.comments = data;
        console.log(this.comments);
        
    })
  }

  addComment(value) {
    var comment = {
      comment : value,
      postId : this.id,
      commentBy : localStorage.getItem('author')
    }
     this.blogService.addComment(comment).subscribe(()=>{
        this.ngOnInit();
        this.commentVal = '';
    })
  }
  like() {
    this.blogService.addLike(this.id,this.id).subscribe(()=> {
      this.ngOnInit();
    })
  }
  edit() {
    this.router.navigate([`/postEdit/${this.id}`]);
  }
  
  delete( ){
    this.blogService.deletePost(this.id).subscribe(()=> {
      this.router.navigate(['/home']);
    })
  }


}
