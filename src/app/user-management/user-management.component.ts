import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';



@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users: User[] ;

  constructor(private service:UserService) { }

  ngOnInit(): void { 
    this.service.getUsers().subscribe(data =>{
      this.users = data;
      console.log(data)
    })
  }
}
