import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input } from '@angular/core/src/metadata/directives';
import {environment} from '../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
//const url_server = "https://dry-crag-11536.herokuapp.com/"
//const url_server = "http://localhost:8080/"
const url_server = environment.apiUrl + "/collegues"
@Injectable()
export class CollegueService {

   //collegues:Array<Collegue>
    constructor(private http: HttpClient) {
   }
    listerCollegues():Promise<Collegue[]> {

    return  this.http.get<any>(`${url_server}`).toPromise().then(cols => {
      return cols.map(col => new Collegue(col.pseudo, col.url, col.score))
    })

    }
    sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue
      let data = {"pseudo":newCollegue.nom,"url":newCollegue.url}
      return this.http.post<Collegue>(`${url_server}/ajouter`,data,httpOptions).toPromise()

  }
    aimerUnCollegue(collegue:Collegue):Promise<Collegue> {

      return this.http.put<Collegue>(`${url_server}/${collegue.nom}/score`,"jaime",httpOptions)
           .toPromise()        
     }  
   
    detesterUnCollegue(collegue:Collegue):Promise<Collegue> {
      return this.http.put<Collegue>(`${url_server}/${collegue.nom}/score`,"jeDeteste",httpOptions)
      .toPromise()
   }
}