import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(public http: HttpClient, private router: Router) { }
  getData<Type>(url: string) {
    return this.http.get<Type>(url);
  }
  postData<Type>(url: string, value: Type) {
    let headers = new HttpHeaders({ 'Content-type': 'application/json' })
    return this.http.post(url, value, { headers: headers });
  }
  putData<Type>(url: string, value: Type) {
    let headers = new HttpHeaders({ 'Content-type': 'application/json' })
    return this.http.put(url, value, { headers: headers });
  }
  deleteData<Type>(url: string, id: number) {
    return this.http.delete(url + '/' + id);
  }
  getAdminDatas<Type>(url: string) {
    return this.http.get<Type>(url, { observe: 'response' });
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logOut() {
    if (confirm('Are you sure?')) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  login<Type>(url: string, value: Type) {
    let headers = new HttpHeaders({ 'Content-type': 'application/json' })
    return this.http.post(url, value, { headers: headers });
  }
}
