import { Component } from '@angular/core';
// TODO importer la classe Collegue
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit {
  
 collegues:Array<Collegue>

 constructor(private collegueService:CollegueService) {

 }

 ngOnInit() {
    //this.collegues = [new Collegue("Charles","",20),new Collegue("Alfred","",30),new Collegue("Jean","",60)
   // ,new Collegue("Hugo","",90),new Collegue("Pierre","",40)]
 
  this.collegueService.listerCollegues().then((tab)=>{this.collegues=tab})  
}

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement, toastSuccess:HTMLInputElement){

    let collegue= new Collegue(pseudo.value,imageUrl.value,0)
    
       if (pseudo.value != ""  &&  imageUrl.value !=""){
        
      this.collegueService.sauvegarder(collegue).then(col =>{
        this.collegues.push(col)
        toastSuccess.className = ""
        toastSuccess.className += "alert alert-success";
        toastSuccess.innerHTML = `Le collègue <strong>${pseudo.value} </strong>a été ajouté avec  succès`
        pseudo.value=""
        imageUrl.value=""
        toastSuccess.style.visibility = 'visible'
        setTimeout(function(){toastSuccess.style.visibility = 'hidden'},3000);
        
       })
    }else{
      toastSuccess.className = ""
      toastSuccess.className += "alert alert-danger";
      toastSuccess.innerHTML = `Erreur vous devez saisir un pseudo et une URL`
      toastSuccess.style.visibility = 'visible'
      setTimeout(function(){toastSuccess.style.visibility = 'hidden'},3000);
      return false;
    }
    //return false;
  }
}