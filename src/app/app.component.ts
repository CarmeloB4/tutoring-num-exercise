import { Component } from '@angular/core';
import {DataService} from "./shared/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numFacts!:string;
  evens: string[] = [];
  odds: string[] = [];

  constructor(private service: DataService) {
    this.getData()
  }

  public getData(): void {
     this.service.getRandomNum().subscribe((resp) => this.numFacts = resp)
  }

  public evenNumber():void {
    this.evens.push(this.numFacts)
    this.getData()
  }

  public oddNumber():void {
    this.odds.push(this.numFacts)
    this.service.updateStorage(this.odds)
    this.getData()
  }

}
