import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { collection, doc, setDoc } from 'firebase/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstName2: ['', Validators.required],
    lastName2: ['', Validators.required],
    birthdate2: '',
  });
  secondFormGroup = this._formBuilder.group({
    street: ['', Validators.required],
    zipCode: ['', Validators.required],
    city: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    email: ['', Validators.required],
    phone: '',
  });
  isEditable = true;

  user: User = new User();
  genders: string[] = ['Male', 'Female', 'Divers'];

  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.loading = true;

    this.user.firstName = this.firstFormGroup.controls.firstName2.value;
    this.user.lastName = this.firstFormGroup.controls.lastName2.value;
    this.user.birthdate = this.firstFormGroup.controls.birthdate2.value
      ? convert(this.firstFormGroup.controls.birthdate2.value)
      : '';

    this.user.street = this.secondFormGroup.controls.street.value;
    this.user.zipCode = this.secondFormGroup.controls.zipCode.value;
    this.user.city = this.secondFormGroup.controls.city.value;

    this.user.email = this.thirdFormGroup.controls.email.value;
    this.user.phone = this.thirdFormGroup.controls.phone.value
      ? this.thirdFormGroup.controls.phone.value
      : '';

    this.user.userID = this.user.createID(20);

    this.createFirestoreUser();
    this.closeDialog();
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

function convert(str: any) {
  var date = new Date(str),
    mnth = ('0' + (date.getMonth() + 1)).slice(-2),
    day = ('0' + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join('.');
}
