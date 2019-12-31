import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts : any = []
  constructor(private router: Router, private route: ActivatedRoute,private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe((data) => {
        console.log(data);      
        this.posts =  data;
    });
  }

  openComments(id) {
    this.router.navigate([`/singlePost/${id}`]);
    console.log(id);
    
  }



}
