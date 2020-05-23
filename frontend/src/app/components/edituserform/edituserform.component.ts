import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from '../../services/user.service';
import { UserModel } from 'src/app/models/usermodel';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edituserform',
  templateUrl: './edituserform.component.html',
  styleUrls: ['./edituserform.component.css']
})
export class EdituserformComponent implements OnInit {

  //attributes
  id:number;
  selectedUser:UserModel;
  constructor(private userService:UserService, private route:ActivatedRoute)
  {
    this.selectedUser = new UserModel();
  }

  //initialization
  ngOnInit(): void 
  {
    this.route.paramMap.subscribe(params=>
      {
        this.id = +params.get('id');
      });
      this.userService.getUserById(this.id).subscribe(res=>
        {
          this.selectedUser = res[0];
        });
  }

  //crud methods
  updateUser(form:NgForm)
  {
    this.userService.updateUser(this.id,this.generateUser(form)).subscribe(res=>
      {
        //clean form
        alert(`User id:${this.id} has been updated`);
      });
  }

  //additional methos
  generateUser(form:NgForm)
  {
    if(form)
    {
      let user = new UserModel();
      user.first_name = form.value.name;
      user.last_name = form.value.lastname;
      user.username = form.value.username;
      return user;
    }
  }
}
