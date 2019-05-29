import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  
  @Input() titre: string;
  @Input() description: string;
  @Input() date: Date;
  @Input() nbrLove: number;

  likeStatus: string;
  colorBackground: string;

  constructor() { }

  ngOnInit() {
    this.getColor();
  }

  getColor() {
    if(this.nbrLove == 0){
      this.colorBackground = 'white'
      this.likeStatus = 'neutre';
      return 'black';
    }else if(this.nbrLove > 0) {
      this.colorBackground = 'green'
      this.likeStatus = 'ok';
      return 'green';
    } else if(this.nbrLove < 0) {
      this.colorBackground = 'red'
      this.likeStatus = 'nok';
      return 'red';
    }
  }

  getBackgroundColor(){
    return this.colorBackground;
  }

  ajoutLike(){
    this.nbrLove += 1;
  }

  ajoutDislike(){
    this.nbrLove -= 1;
  }

}
