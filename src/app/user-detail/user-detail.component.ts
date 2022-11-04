import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { collection, doc, setDoc } from 'firebase/firestore';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditContactComponent } from '../dialog-edit-contact/dialog-edit-contact.component';

export interface DialogData {
  user: User;
}
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public path: any;
  user: User = new User();

  constructor(
    private firestore: Firestore,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.path = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const userRef = collection(this.firestore, 'users');
    docData(doc(userRef, this.path)).subscribe((user: any) => {
      this.user = new User(user);
    });
  }

  openEditadress() {
    const dialogRef = this.dialog.open(DialogEditAddressComponent, {
      data: { user: this.user },
    });
    this.afterCloseDialog(dialogRef);
  }

  openEditContact() {
    const dialogRef = this.dialog.open(DialogEditContactComponent, {
      data: { user: this.user },
    });
    this.afterCloseDialog(dialogRef);
  }

  afterCloseDialog(dialogRef: any) {
    let copyUser = this.user.toJson();
    dialogRef.afterClosed().subscribe((result: any) => {
      const gameRef = collection(this.firestore, 'users');
      if (result) {
        this.user.street = result.user.street;
        setDoc(doc(gameRef, this.user.userID), this.user.toJson());
      } else {
        setDoc(doc(gameRef, this.user.userID), copyUser);
      }
    });
  }
}
