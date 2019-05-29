import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      titre: 'Mon premier post',
      description : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de',
      date: new Date(),
      nbrLove: 1
    },
    {
      titre: 'Mon deuxième post',
      description : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de',
      date: new Date(),
      nbrLove: -1
    },
    {
      titre: 'Ecore un post',
      description : 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de',
      date: new Date(),
      nbrLove: 0
    }
  ]

  constructor() {
  }  
}
