import {Component, OnInit} from '@angular/core';
import {LetterService} from "../../services/letter.service";
import {BORDERS, FONTS} from "../../const";
import {init} from "protractor/built/launcher";

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  actualFont: string;
  actualBorder: string;
  postdataOk: boolean;


  constructor(public letterService: LetterService) {
    this.init();

  }

  ngOnInit(): void {
  }

  init(){
    this.postdataOk = this.letterService.getRandom(0,1) < 0.3 ;
    this.setRandomFont();
    this.setRandomBorder();
  }

  setRandomBorder(){
    this.actualBorder = BORDERS[Math.floor(this.letterService.getRandom(0,BORDERS.length))];
  }

  setRandomFont(){
    this.actualFont = FONTS[Math.floor(this.letterService.getRandom(0,FONTS.length))];
  }

  get _letterService(){
    return this.letterService;
  }

}
