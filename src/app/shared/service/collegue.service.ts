import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input } from '@angular/core/src/metadata/directives';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const url_server = "https://dry-crag-11536.herokuapp.com/"
//const url_server = "http://localhost:8080/"
@Injectable()
export class CollegueService {

   //collegues:Array<Collegue>
    constructor(private http: HttpClient) {
      //this.collegues = [new Collegue("Charles","http://www.tapis-chic.com/img/p/thickbox/1817-8856.jpg",20)]
      
      /*this.collegues = [new Collegue("Charles","",20),new Collegue("Alfred","",30),new Collegue("Jean","",60)
      ,new Collegue("Hugo","",90),new Collegue("Pierre","",40)]*/

   }
    listerCollegues():Promise<Collegue[]> {
    // TODO effectuer la liste des collègues
    // TODO retourner l'objet Promise<Collegue[]>
    return  this.http.get<Collegue[]>(`${url_server}/collegues`).toPromise()
      /*return new Promise((resolve,reject)=>{
        return resolve(this.collegues);
      })*/
    }
    sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue
      let data = {"pseudo":newCollegue.nom,"url":newCollegue.url}
      return this.http.post<Collegue>(`${url_server}/collegues/ajouter`,data,httpOptions).toPromise()

  }
    aimerUnCollegue(collegue:Collegue):Promise<Collegue> {

      return this.http.put<Collegue>(`${url_server}/collegues/${collegue.pseudo}/score`,"jaime",httpOptions)
           .toPromise()        
     }  
   
    detesterUnCollegue(collegue:Collegue):Promise<Collegue> {
      return this.http.put<Collegue>(`${url_server}/collegues/${collegue.pseudo}/score`,"jeDeteste",httpOptions)
      .toPromise()
   }
}