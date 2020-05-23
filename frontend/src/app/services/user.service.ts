import { Injectable } from '@angular/core';
import { UserModel } from '../models/usermodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  //attributes
  private url:string = 'http://localhost:3000/users';
  public userHolder:UserModel;

  constructor(private client:HttpClient) {this.userHolder= new UserModel();}

  //crud methods
  public getUsers()
  {
    return this.client.get(this.url);
  }

  public getUserById(id:number)
  {
    return this.client.get(`${this.url}/${id}`);
  }

  public postUser(user:UserModel)
  {
    return this.client.post(this.url,user);
  }

  public updateUser(id:number,user:UserModel)
  {
    return this.client.put(`${this.url}/${id}`,user);
  }

  public deleteUser(id:number)
  {
    return this.client.delete(`${this.url}/${id}`);
  }

}
