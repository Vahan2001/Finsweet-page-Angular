import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AllPostsData } from 'src/app/models/script';

@Component({
  selector: 'app-allpostsadmin',
  templateUrl: './allpostsadmin.component.html',
  styleUrls: ['./allpostsadmin.component.css']
})
export class AllpostsadminComponent implements OnInit{
  displayedColumns: string[] = ['image', 'title', 'subtitle', 'author', 'authordate', 'description', 'action'];
  dataSource!: MatTableDataSource<AllPostsData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  usersForm: FormGroup = new FormGroup({});
  displayForm: boolean = false;
  actionBtn: string = 'Save'
  row: any;
  titleForm: string = 'Add Authors';
  constructor(public fb: FormBuilder, private request: RequestService) {
  }
  ngOnInit(): void {
    this.usersForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      authordate: ['', Validators.required]
    }),
    this.getAllUsers()
  }

  getAllUsers() {
    this.request.getData<AllPostsData[]>(environment.allPostsUrl.get).subscribe((item: AllPostsData[]) => {
      this.dataSource = new MatTableDataSource(item);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, (e) => {
      alert(e);
    })
  }
  addBlock() {
    this.displayForm = !this.displayForm;
    this.actionBtn = 'Save';
    this.titleForm = 'Add Authors';
    this.usersForm.reset();
  }
  editBlock(row: AllPostsData) {
    this.row = row;
    this.usersForm.patchValue({
      image: row.image,
      title: row.title,
      subtitle: row.subtitle,
      description: row.description,
      author: row.author,
      authordate: row.authordate
    });
    this.displayForm = !this.displayForm;
    this.actionBtn = 'Update';
    this.titleForm = 'Edit Authors';
  }
  putEdit(row: AllPostsData) {
    const id = row.id;
    if(confirm('Do you want to confirm the change?')) {
      this.request.putData<AllPostsData>(`${environment.allPostsUrl.get}/${id}`, this.usersForm.value).subscribe((item: any) => {
        row.image = item.image;
        row.title = item.title;
        row.subtitle = item.subtitle;
        row.description = item.description;
        row.author = item.author;
        row.authordate = item.authordate;
        alert('The change is done');
        }, (e) => {
          alert(e);
        })
    }
    this.displayForm = !this.displayForm;
      this.getAllUsers();
  }
  addEditUser() {
    if(this.actionBtn === 'Save' && this.usersForm.valid) {
      if(confirm('Do you want to add?')) {
        this.request.postData<AllPostsData>(environment.allPostsUrl.get, this.usersForm.value).subscribe(() => {
          alert('ADD USERS');
          this.displayForm = !this.displayForm;
          this.getAllUsers();
        }, () => {
          alert("ERROR ADD USERS")
        })
      }
    } else if (this.actionBtn === 'Update' && this.usersForm.valid) {
      this.putEdit(this.row);
      this.getAllUsers();
    }
  }
  deleteUser(id: number) {
    if(confirm('Do you want to delete?')) {
      this.request.deleteData(environment.allPostsUrl.get, id).subscribe(() => {
        alert('Delete Users');
        this.getAllUsers();      
      }, (e) => {
        alert(e);
      })
    }
  }
  close() {
    this.displayForm = !this.displayForm
  }
  addUserBtn() {
    this.displayForm = !this.displayForm;
    this.actionBtn = 'Save'
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
