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
  index:any='';

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        console.log('Users fetched from API:', data);
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
          const localUsers: User[] = JSON.parse(storedUsers);
          const mergedUsers = this.mergeUsers(data, localUsers);
          this.users = mergedUsers;
        } else {
          this.users = data;
          this.index=data.forEach(x=>{x.id})
        }
        this.filteredText = [...this.users];
        localStorage.setItem('users', JSON.stringify(this.users));
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  mergeUsers(apiUsers: User[], localUsers: User[]): User[] {
    const userMap = new Map<string, User>();

    apiUsers.forEach(user => userMap.set(user.id.toString(), user));
    localUsers.forEach(user => userMap.set(user.id.toString(), user));

    return Array.from(userMap.values());
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
      id: this.generateUniqueId(),
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
  deleteUser(user:User){
//this.filteredText.splice(index,1);
this.users = this.users.filter(u => u.id !== user.id);
this.filteredText = [...this.users];
localStorage.setItem('users', JSON.stringify(this.users));
console.log('User deleted:', user);
  }

  editUser(user:User){
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '300px',
      data: { ...user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.users.findIndex(u => u.id === result.id);
        if (index !== -1) {
          this.users[index] = result;
          this.filteredText = [...this.users];
          localStorage.setItem('users', JSON.stringify(this.users));
          console.log('User updated:', result);
        }
      }
    });
  }

  generateUniqueId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
