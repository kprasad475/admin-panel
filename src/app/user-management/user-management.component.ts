import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];
  searchText: string = "";
  filteredText: User[] = [];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
      this.filteredText = data;
    });
  }

  search(): void {
    console.log('Search Text:', this.searchText);
    if (this.searchText) {
      this.filteredText = this.users.filter(item => {
        const matches = item.name.toLowerCase().includes(this.searchText.toLowerCase());
        console.log('Item:', item.name, 'Matches:', matches);
        return matches;
      });
    } else {
      this.filteredText = this.users;
    }
    console.log(this.filteredText);
  }
}
