import {Component, OnInit, ViewChild} from '@angular/core';
import {LetterService} from "../../services/letter.service";
import {LetterComponent} from "../letter/letter.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(LetterComponent) letter: LetterComponent

  constructor(public letterService: LetterService) { }

  ngOnInit(): void {
    this.letterService.setNewLetter();
  }

  get _letterService(){
    return this.letterService;
  }

  createLetter(){
    this.letter.init();
    this.letterService.setNewLetter();
  }


}
