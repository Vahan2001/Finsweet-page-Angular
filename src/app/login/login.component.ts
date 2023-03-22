import { Token } from '../models/script';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../service/request.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({});
  constructor(public fb: FormBuilder, private request: RequestService, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password: ['', Validators.required]
    })
  };
  submitLogin() {
    this.request.login<Token>('https://reqres.in/api/login', this.loginForm.value).subscribe((item: Token) => {
      if('token' in item && item.token != undefined) {
        this.request.setToken(item.token);
        this.router.navigate(['admin']);
      }
    }, (err) => {
      alert(err)
    })
  }
}
