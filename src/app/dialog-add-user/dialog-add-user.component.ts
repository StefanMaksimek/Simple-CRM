import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { collection, doc, setDoc } from 'firebase/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  email = new FormControl('', [
    Validators.required,
    Validators.pattern('[^ @]*@[^ @]*'),
  ]);
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);

  birthdate!: Date;

  user: User = new User();

  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore
  ) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.loading = true;
    this.user.email = this.email.value;
    this.user.firstName = this.firstName.value;
    this.user.lastName = this.lastName.value;
    this.user.birthdate = this.birthdate ? this.birthdate.getTime() : '';
    this.user.userID = this.user.createID(20);

    this.createFirestoreUser();
    this.closeDialog();
    console.log(this.user);
    this.loading = false;
  }

  createFirestoreUser() {
    const userRef = collection(this.firestore, 'users');
    setDoc(doc(userRef, this.user.userID), this.user.toJson());
  }

  getErrorMessage(x: FormControl, y: string) {
    if (x.hasError('required')) {
      return 'You must enter a value';
    }

    return x.hasError('pattern') ? `Not a valid ${y}` : '';
  }
}
