import { Component, OnInit } from '@angular/core';

//Importing the data service into the user component,
//so that the user component can use the data service
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address //Address is an object we created below
  hobbies: string[]; //declaring that hobbies will be a string array

  //creating a property called posts, to see what Post[] is check the interface
  //created at the bottom
  posts: Post[];

  isEdit: boolean = false;

  //To use our dataservice we must send it into the constructor like this
  //If we do this we can now use any functions in our dataservice
  constructor(private dataService: DataService) {
    console.log("Constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran..");

    this.name = 'John Smith';
    this.age = 17;
    this.email = "email@email.com";
    this.address = {
      street: '50 Main str.',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;

    });
  }

  onClick() {
    //Add a new hobby called new hobby
    //Push adds to our array
    this.hobbies.push('New Hobby');
  }

  changeName() {
    this.name = 'Kyon';
  }

  addHobby(hobby) {
    console.log(hobby);
    //Here we are pushing hobby into the front of the array
    this.hobbies.unshift(hobby);
    //Returning false just so we can see it in console
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    //Iterate through all hobbies
    for (let i = 0; i < this.hobbies.length; i++) {
      //Confirm that the one we want to delete is the current iteration
      if (this.hobbies[i] == hobby) {
        //Note splice takes something out of an array
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    //This will if true, set it to false, if it is false it will set it to true
    this.isEdit = !this.isEdit;
  }

}

//We made an interface for this object so it is neater
//Than just delcaring it above
//Note: You can declare this interface in another file if
//You plan on using this object more than once,
//And then you can import it to many files
interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number;
  title: string;
  body: string;
  userid: number;
}
