import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminSenha } from '../model/adminSenha';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
 URLApi : string = "http://localhost:8080/";
 URLAdmin : string  = this.URLApi + "admin";
 URLLogin : string = this.URLApi + "login";
 
  constructor(private http:HttpClient ) { }

  cadastroAdmin(admin: Admin){
    return this.http.post(this.URLAdmin, admin)
  }

  loginAdmin(senha: AdminSenha){
    return this.http.post(this.URLLogin, senha)
  }

}
