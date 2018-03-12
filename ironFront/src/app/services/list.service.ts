import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class ListService {

  constructor(
    private http:Http
  ) { }

  removeList(list){
    return this.http.delete('http://localhost:3000/api/lists/'+list._id)
    .map((res:Response)=>res.json())
    .map(list=>list)
    .catch(e=>{
      console.log(e);
      return Observable.throw(e);
    })
  }

  patchList(list):Observable<any>{
    return this.http.patch('http://localhost:3000/api/lists/'+list._id, list)
    .map((res:Response)=>res.json())
    .map(list=>list)
    .catch(e=>{
      console.log(e);
      return Observable.throw(e);
    })
  }

  fetchLists():Observable<any>{
    return this.http.get('http://localhost:3000/api/lists')
    .map((res:Response)=>res.json())
    .map(list=>list)
    .catch(e=>{
      console.log(e);
      return Observable.throw(e);
    })
  }

  addList(list):Observable<any>{
    return this.http.post('http://localhost:3000/api/lists', list)
    .map((res:Response)=>res.json())
    .map(function(list){
      return list;
    })
    .catch(e=>{
      console.log(e);
      return Observable.throw(e);
    })
  }

}
