import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { Observable , Subject, BehaviorSubject } from 'rxjs';


@Injectable()
export class StateService {
  subject:Subject<boolean> = new BehaviorSubject(false)
  
  constructor(private _http:HttpClient) { }

  state(): Observable<boolean>{
    Observable.interval(5000).subscribe(() => this._http.get<any>(environment.apiUrl+"/collegues").subscribe((response) => {
      return this.subject.next(true);
    },(err: HttpErrorResponse) => {
        return this.subject.next(false);
    }))
    return this.subject
  }
}
