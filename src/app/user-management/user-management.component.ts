import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';



@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];
  searchText: string = "";
  filteredText: User[] = [];
  sortCondition:boolean = false
  originalItems : any [] = []

  constructor(private service: UserService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
      this.filteredText = data;
     this.originalItems = [...this.filteredText];

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
  sort() {
    // Toggle the sort condition
    this.sortCondition = !this.sortCondition;

    if (this.sortCondition) {
      // If sortCondition is true, sort the array
      this.filteredText.sort((a, b) => a.name.localeCompare(b.name));
      console.log("yyyyy")
    } else {
      // If sortCondition is false, shuffle the array
     // this.filteredText = this.shuffleArray([...this.originalItems]);
     this.filteredText.sort((a, b) => b.name.localeCompare(a.name));

      console.log("kkk")
    }
    console.log(this.sortCondition);
  }

  addUser():void{
    const newUser = {
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
        this.originalItems = [...this.filteredText];
        // You can now handle the result (e.g., send it to the server)
      }
    });
  }
  
  
}
