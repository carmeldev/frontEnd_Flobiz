import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id;
  post:any;
  constructor(private router: Router, private route: ActivatedRoute,private blogService: BlogService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.blogService.getProfile(this.id).subscribe(res => {
        this.post = res[0];
        console.log(this.post);
        
      });
    });
  }

  editProfile(){
    this.router.navigate([`/profileEdit/${this.id}`]);
  }
}
