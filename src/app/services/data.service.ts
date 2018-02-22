import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log("Data Service connected...");
   }

   //Creating a function to get posts
   getPosts(){
     //This is a random website that has a bunch of posts that are json objects
     //the following command will get the json opbjects from this website and save them as json objects
     return this.http.get('http://jsonplaceholder.typicode.com/posts').map(res => res.json());

   }

}
