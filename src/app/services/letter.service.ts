import {Injectable} from "@angular/core";
import {Letter} from "../entities/Letter";
import {HttpClient} from "@angular/common/http";
import {API, PERCENTAGE_CONNECTOR} from "../const";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root',
})
export class LetterService {
  letter: Letter;
  isLoading: boolean = true;
  error: Error = null;

  constructor(private http: HttpClient) {
    this.letter = new Letter();
  }

  getRandom(min, max){
    return Math.random() * (max - min) + min;
  }

  setFormatedBody(){
    let body = "";
    this.letter.bodies.forEach( (b,i) =>{
      const randomConnector =  this.getRandom(0,1);
      const posConnector = Math.floor(this.getRandom(0,this.letter.connectors.length));
      body += b;
      body += i == this.letter.bodies.length - 1 ?
        '.' : randomConnector <= PERCENTAGE_CONNECTOR ?
          ' ' + this.letter.connectors.splice(posConnector, 1)[0] + ' ' : ', ';
    });
    this.letter.formatedBody = body;
  }

  setNewLetter() {
    this.isLoading = true;
    this.getLetter().subscribe(nl => {
      console.log(nl);
      Object.assign(this.letter, nl);
      this.setFormatedBody();
    }, error => this.error = error, () => {
      this.isLoading = false
    });

  }

  getLetter(): Observable<Letter> {
    return this.http.get<Letter>(`${API}getletter`);
  }

}
