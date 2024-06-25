import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

const ELEMENT_DATA: UserData[] = [
  { id: '1', name: 'Hydrogen', progress: '70%', color: 'blue' },
  { id: '2', name: 'Helium', progress: '80%', color: 'green' },
  // Add more data here
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);

  displayedCoulmning:string[]=['id','name','progress','color','status']

  constructor() { }

  ngOnInit(): void {
  }

}
