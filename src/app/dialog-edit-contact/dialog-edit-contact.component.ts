import { Component, Inject, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { collection, doc, setDoc } from 'firebase/firestore';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogData } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-dialog-edit-contact',
  templateUrl: './dialog-edit-contact.component.html',
  styleUrls: ['./dialog-edit-contact.component.scss'],
})
export class DialogEditContactComponent implements OnInit {
  user: User = new User();
  constructor(
    public dialogRef: MatDialogRef<DialogEditAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private firestore: Firestore
  ) {
    this.user = new User(this.data.user);
  }

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
  }

  updateUser() {
    const gameRef = collection(this.firestore, 'users');
    setDoc(doc(gameRef, this.user.userID), this.user.toJson());
  }
}
