// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../environment/environment';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class Auth {
  url:string="";
  constructor(private http:HttpClient) {
     this.url = environment.apiUrl;
   }
 
   login(username:string,password:string){
       
   }
}