import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { CheckLogin } from "../checkLogin.component";
import { HttpService } from "../http.service";
import { ParentClass } from "../ParentClass";

@Component({
    selector : "app-acc",
    templateUrl : "./accomodation.component.html"
})

export class Accomodation extends CheckLogin implements OnInit{

    name = '';
    discription = '';
    dormLink = '';
    navLink = '';
    lstAccom : Array<Accom>;

    objAccom : Accom;

    constructor(private httpService : HttpService, private router : Router, public dialog: MatDialog){
        super();
    }

    ngOnInit(): void {

        this.objAccom = new Accom();
        this.httpService.fetchData(this.objAccom).subscribe((res) => {
            this.lstAccom = res;
        });
    }
    
    onInsert(){
        
        this.objAccom = new Accom(this.name, this.discription, this.dormLink, this.navLink);
        this.httpService.saveData(this.objAccom).subscribe((res) => {
            this.lstAccom = res;
            this.reset();
        });

    }

    callDelete(obj: Accom){
        obj.modelName = "Accomodation";
        this.httpService.deleteData(obj).subscribe((res) => {
            this.lstAccom = res;
        });
    }

    reset(){
        this.name = '';
        this.discription = '';
        this.dormLink = '';
        this.navLink = '';
    }


    openDialog(obj: Accom): void {
        //console.log(obj);
        const dialogRef = this.dialog.open(EditDialogA, {
          width: '400px',
          data: obj,
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.objAccom = result;
          this.objAccom.modelName = "Accomodation";
          this.httpService.updateData(this.objAccom).subscribe((res) => {
            this.lstAccom = res;
        });

        });
}


    
}

@Component({
    selector: 'accomodation-dialog',
    templateUrl: 'accomodation.dialog.html',
  })

export class EditDialogA {

    constructor(
      public dialogRef: MatDialogRef<EditDialogA>,
      @Inject(MAT_DIALOG_DATA) public data: Accom,
    ) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

  }

class Accom extends ParentClass{
    name = '';
    discription = '';
    dormLink = '';
    navLink = '';

    constructor(dromN? : string, desc? : string, dormLink? : string, navL? : string){

        super('Accomodation','');
        if(dromN){
            this.discription = desc;
            this.dormLink = dormLink;
            this.name = dromN;
            this.navLink = navL;
        }

        
    }
}