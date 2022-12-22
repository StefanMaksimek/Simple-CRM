import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { collection, doc } from 'firebase/firestore';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'name',
    'birthdate',
    'email',
    'phone',
    'address',
    'employment',
  ];
  users: any;

  ngOnInit(): void {
    this.getUsers();
    this.paginator._intl.itemsPerPageLabel = 'Users pro Seite';
  }

  ngAfterViewInit() {}

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  getUsers() {
    collectionData(collection(this.firestore, 'users'), {
      idField: 'id',
    }).subscribe((users) => {
      this.users = new MatTableDataSource(users);
      this.users.paginator = this.paginator;
      this.users.sort = this.sort;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {});
  }
}
