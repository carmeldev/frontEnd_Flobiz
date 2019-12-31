import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // baseUrl = 'http://localhost:4300';
  baseUrl = "https://backend-post-app.herokuapp.com";

  constructor(private http: HttpClient) { }
  // get
  getPosts() {
    return this.http.get(`${this.baseUrl}/getposts`);
  }
//post
  addUser(addingValues) {
    return this.http.post(`${this.baseUrl}/adduser`, addingValues);
  }

  addPost(addingValues) {
    return this.http.post(`${this.baseUrl}/addpost`, addingValues);
  }
  addComment(addingValues) {
    return this.http.post(`${this.baseUrl}/addcomment`, addingValues);
  }

  signin(credentials) {
    return this.http.post(`${this.baseUrl}/signin`, credentials);
  }
//update
  updateProfile(id, updatingValues) {
    return this.http.post(`${this.baseUrl}/editUser/${id}`, updatingValues);
  }

  updatePost(id, updatingValues) {
    return this.http.post(`${this.baseUrl}/editPost/${id}`, updatingValues);
  }

  addLike(id, updatingValues) {
    return this.http.post(`${this.baseUrl}/addLike/${id}`, updatingValues);
  }
//getbyId
  getOnePost(id) {
    return this.http.get(`${this.baseUrl}/getsinglepost/${id}`);
  }
//Profile
  getProfile(id) {
    return this.http.get(`${this.baseUrl}/getProfile/${id}`);
  }
  //get Comments
  getComments(id) {
    return this.http.get(`${this.baseUrl}/getcomments/${id}`);
  }
//delete
  deletePost(id) {
    return this.http.get(`${this.baseUrl}/deletePost/${id}`);
  }
}
