import { Component, Inject, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { collection, doc, setDoc } from 'firebase/firestore';
import { User } from 'src/models/user.class';
import { DialogData } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent implements OnInit {
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
