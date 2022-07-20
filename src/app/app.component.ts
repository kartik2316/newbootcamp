import { Component,OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  topics=['angular','react','vue'];
  UserModel=new User('ram','ram@gmail.com',4521,'','morning',true);
  constructor(){

  }
  ngOnInit(): void {

  }


}
