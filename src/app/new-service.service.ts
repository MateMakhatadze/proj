import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  


  // get method
private ApiUrl ="https://restaurant.stepprojects.ge/api/Products/GetAll"




  constructor(private http:HttpClient) { }
  getProducts():Observable<any>{
    return this.http.get<any>(this.ApiUrl)

 
    
  }




  //postmethod


}
