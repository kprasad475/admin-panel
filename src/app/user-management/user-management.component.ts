import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];
  filteredText: User[] = [];
  searchText: string = "";
  sortCondition: boolean = false;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    // Fetch users from backend
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        console.log('Users fetched from API:', data);
        // Try to get users from local storage
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
          // Merge stored users with API users
          const localUsers = JSON.parse(storedUsers);
          this.users = [...data, ...localUsers];
        } else {
          this.users = data;
        }
        this.filteredText = [...this.users];
        // Save merged users to local storage
        localStorage.setItem('users', JSON.stringify(this.users));
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  search(): void {
    this.filteredText = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  sort(): void {
    this.sortCondition = !this.sortCondition;

    if (this.sortCondition) {
      this.filteredText.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.filteredText.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  addUser(): void {
    const newUser: User = {
      id: '',
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      }
    };

    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '300px',
      data: newUser
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User added:', result);
        this.users.push(result);
        this.filteredText = [...this.users];
        localStorage.setItem('users', JSON.stringify(this.users));
        console.log('Updated users saved to local storage:', this.users);
      }
    });
  }
}
