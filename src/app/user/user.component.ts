import { Component, OnInit } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  getUsers() {
    collectionData(collection(this.firestore, 'users'), {
      idField: 'id',
    }).subscribe((users) => {
      this.users = users;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {});
  }
}
