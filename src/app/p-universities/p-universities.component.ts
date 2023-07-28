import { Component, Inject, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { concatMapTo } from 'rxjs';
import { CheckLogin } from '../checkLogin.component';
import { HttpService } from '../http.service';
import { ParentClass } from '../ParentClass';

@Component({
  selector: 'app-p-universities',
  templateUrl: './p-universities.component.html',
  styleUrls: ['./p-universities.component.scss']
})
export class PUniversitiesComponent extends CheckLogin implements OnInit {

  name = '';
  link = '';
  locationLink = '';

  objPartUni : PartnerUni;
  displayList : Array<PartnerUni>;
  constructor(private httpService : HttpService, public dialog: MatDialog) { super();}

  ngOnInit(): void {
    this.objPartUni = new PartnerUni(this.name,this.link, this.locationLink);
    this.httpService.fetchData(this.objPartUni).subscribe((res) => {
      this.displayList = res;
      console.log(res);
    })
  }

  onUniInsert(){
    this.objPartUni = new PartnerUni(this.name,this.link, this.locationLink);
    this.httpService.saveData(this.objPartUni).subscribe((res) => {
      this.displayList = res;
      this.reset();
    })
  }

  reset(){
    this.name = '';
    this.link = '';
    this.locationLink = '';
  
  }

  callDelete(obj: PartnerUni){
    obj.modelName = "PartnerUnis";
    console.log(obj.name);
    this.httpService.deleteData(obj).subscribe((res) => {
        this.displayList = res;
    });
}

  openDialog(obj: PartnerUni): void {
    //console.log(obj);
    const dialogRef = this.dialog.open(EditDialogPU, {
      width: '400px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.objPartUni = result;
      this.objPartUni.modelName = "PartnerUnis";
      this.httpService.updateData(this.objPartUni).subscribe((res) => {
        this.displayList = res;
    });

    });
}



}

@Component({
selector: 'p-universities.dialog',
templateUrl: 'p-universities.dialog.html',
})

export class EditDialogPU {

constructor(
  public dialogRef: MatDialogRef<EditDialogPU>,
  @Inject(MAT_DIALOG_DATA) public data: PartnerUni,
) { }

onNoClick(): void {
  this.dialogRef.close();
}

}

class PartnerUni extends ParentClass{
  name = '';
  link = '';
  location = '';
  constructor(uN : string, l: string, ll:string){
    super('PartnerUnis','');
    this.link = l;
    this.location = ll;
    this.name = uN;
  }
}
