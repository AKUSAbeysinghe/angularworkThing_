/**import { Component, ViewChild,  AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'Ang';
  parentMessage: string ='Message Changed';
  message: string | undefined ;
  fromChildOutput: string | undefined 

  @ViewChild(PostComponent)
  childComp!: { childMessage: string | undefined; }; 

  constructor(){
    console.log(this.childComp);
  }


  

  ngAfterViewInit() {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }

  receiveMessage($event: string){
    this.fromChildOutput = $event;
  }

}
//A perfect introduction to live theater! The puppetry is spectacular.
*/

import { Component } from '@angular/core';
//import { PostService } from './services/post.service';
//import {PostService} from '../services/post.service';
import { FormControl, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  [x: string]: any;
addNew() {
throw new Error('Method not implemented.');
}/*
onDelete(_t57: number) {
throw new Error('Method not implemented.');
}*/
post: any;
buttonClick() {
console.log('Button click Event Worked!');
}
 title(title: any) {
   throw new Error('Method not implemented.');
 }
 //message: string ="Messsage From Typescript Component File"
 //imgUrl: string = 'https://gaillardcenter.org/wp-content/uploads/Event-Page-Graphic-1920x1080-1.jpg';

 bool: boolean = true;
 userName: string | undefined;
 textValue: string = "Value is coming from component"

 onKeyup(){
  


    console.log(this.textValue);
 }


 postTitle: string | undefined; 
 postDetails: string | undefined; 
 imageURL: string | undefined;
 postURL: string | undefined;
 addBackground: boolean | undefined;

isActive: boolean =true;
 postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3','post 4', 'Post 5'];

 //objArray: Array<any> =[{id: 1,postTitle: 'Post 1'},{id: 2,postTitle: 'Post 2'},{id: 3,postTitle: 'Post 3'},{id: 4,postTitle: 'Post 4'},{id: 5,postTitle:'post 5'}];


 objArray: Array<any> =[]

 stepForm: string ="Something Else";
 
 name: string | undefined;
 email: string | undefined;
 address: string | undefined;
 
 
 userArray : Array<any> =[];
 
// Remove or comment out the incorrect title method declaration
// title(title: any) {
//   throw new Error('Method not implemented.');
// }

// Keep this declaration
//title: string = "Angular Course";
 
count: number = 285645;
dcValue: number = 2.56;

price: number = 99.99;

today: Date = new Date();

postObj : object ={
  id: 1,
  postTitle: "post 1"
}
 
userDetails ={

  country : "US",
  code: '2222'
}

dummyText: string ="Put a cover page with TICT3113(P) Assignment Put code in text and attach screenshots below "


//posts: Array<any>;

 constructor(){
    //for(let i=0; i<this.postArray.length; i++){
     // console.log(this.postArray[i]);
   
   
     //let postService = new PostService()
     //this.posts = postService.postList;
    }
 

/** 
 addNew(){
  this.objArray.push({id: 6,postTitle: 'post 6'});
 }

 onDelete(index){
     //let index = this.objArray.indexOf(post);
     this.objArray.splice(index,1);
 }

 onClick(status: string){
    this.stepForm = status;
 }
*/

onclick(){
  this.userArray.push({"name": this.name, "email": this.email, "address": this.address});

console.log(this.userArray);

}


onDelete(index: number)
{
   this.userArray.splice(index,1);
}

addNewData(){
  let newpost ={
    id: 7,
    postTitle: "Post 7"
  }

  this['postService'].addPost(newpost);
}

   onSubmit(f: NgForm){
       console.log(f);
   }


   getValue(f: FormControl){
                console.log(f);
   }

}



