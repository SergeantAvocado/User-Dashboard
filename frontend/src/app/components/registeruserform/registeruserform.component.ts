import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';
import { UserModel } from 'src/app/models/usermodel';

@Component({
  selector: 'app-registeruserform',
  templateUrl: './registeruserform.component.html',
  styleUrls: ['./registeruserform.component.css']
})
export class RegisteruserformComponent implements OnInit {
  
  user:UserModel;
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  this.user=new UserModel();
  }
  //crud operations
  createUser(form:NgForm)
  {
    this.userService.postUser(this.GenerateUser(form)).subscribe(res=>
      {
        alert('user added to database');
        form.reset();
      });
  }

  //additional methos
  GenerateUser(form:NgForm)
  {
    let user:UserModel = new UserModel();
    user.first_name = form.value.first_name;
    user.last_name = form.value.last_name;
    user.username = form.value.username;
    return user;
  }

  CleanForm(form?:NgForm)
  {
    if(form)
    {
      let r = confirm('clean form fields?');
      if(r)
        {
          this.user = new UserModel();
          form.reset();
        }
    }
  }

}
