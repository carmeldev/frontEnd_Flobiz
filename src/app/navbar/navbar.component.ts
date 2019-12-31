import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id: any;
  constructor(private router: Router) {
      this.id  = localStorage.getItem('id');
   }

  ngOnInit() {
  }
  openProfile() { 
    this.router.navigate([`/profile/${this.id}`]);
  }

  logout() {
    localStorage.removeItem('id');

    this.router.navigate(['/login']);
  }

}
