import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../app-services/api-services.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private api: ApiServicesService) { }

  posts: any;

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.api.getInstaPosts().subscribe((resp) => {
      // console.log(resp);
      this.posts = resp;

      // console.log(this.posts.data);
      this.posts = this.posts.data;
    });
  }

}
