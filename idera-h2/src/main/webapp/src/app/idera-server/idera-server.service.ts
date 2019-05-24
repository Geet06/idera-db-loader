import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IderaServerService {

  constructor(private http:HttpClient) { }

  getServerData(){
    var data= this.http.get("/api/server/list");
    return data;
  }
  insertServerData(obj){
    var data= this.http.post("/api/server/add",obj);
    return data;

  }

}
