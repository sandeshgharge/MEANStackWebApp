import { Component, Inject, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Register } from '../registration/register.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  objUser = new Register();

  lstPendingUser  : Array<Register>;
  lstAllUser  : Array<Register>;
  constructor(private httpService : HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.objUser.modelName = "User";
    this.objUser.status = "Pending"
    this.httpService.fetchUserRq(this.objUser).subscribe((res) => {
      this.lstPendingUser = res;
      console.log(res);
    })

    this.objUser.status = "";
    this.httpService.fetchData(this.objUser).subscribe((res) => {
      this.lstAllUser = res;
      console.log(res);
    })
  }

  approve(obj : Register, status : string){
    obj.modelName = "User";
    obj.status = status;
    this.httpService.updateData(obj).subscribe((res) => {
      this.lstPendingUser = res;
  });

}

callDelete(obj: Register){
  obj.modelName = "User";
  console.log(obj.name);
  this.httpService.deleteData(obj).subscribe((res) => {
      this.lstAllUser = res;
  });
}

openDialog(obj: Register): void {
  console.log(obj);
  const dialogRef = this.dialog.open(EditDialogU, {
    width: '400px',
    data: obj,
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.objUser = result;
    this.objUser.modelName = "User";
    this.httpService.updateData(this.objUser).subscribe((res) => {
      this.lstAllUser = res;
  });

  });
}
}

@Component({
  selector: 'user-dialog',
  templateUrl: 'user.dialog.html',
  })
  
  export class EditDialogU {
  
  constructor(
    public dialogRef: MatDialogRef<EditDialogU>,
    @Inject(MAT_DIALOG_DATA) public data: Register,
  ) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  }
