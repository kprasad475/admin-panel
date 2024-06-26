import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None // Disable view encapsulation to apply global styles

})
export class UserDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit():void{
console.log(this.data)
    }

  onCancel(): void {
    this.dialogRef.close();
    console.log(this.data)
    console.log("zzzzzz")
  }

  onSave(): void {
    this.dialogRef.close(this.data);
    console.log(this.data);
    console.log("kkkkkkk")
  }
}
