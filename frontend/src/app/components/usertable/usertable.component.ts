import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { UserModel } from 'src/app/models/usermodel';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  
  //attributes
  users:UserModel[]

  //constructor
  constructor(private userService:UserService) { }

  //initialization
  ngOnInit(): void 
  {
    this.getUsers();
  }

  //crud operations
  getUsers()
  {
    this.userService.getUsers().subscribe(res=>
      {
        this.users = res as UserModel[];
      });
  }

  deleteUser(user:UserModel)
  {
    let r = confirm('do you want to delete this user?');
    if(r==true)
    {
      let id = user.id
      this.userService.deleteUser(id).subscribe(res=>
      {
        this.getUsers();
      });
    }
  }
  //additional operations
  GetData(user:UserModel)
  {
    let data_holder = user;
    console.log(data_holder);
  }

}
