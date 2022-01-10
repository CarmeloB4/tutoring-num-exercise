import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRandomNum():Observable<string> {
    return this.http.get<string>(environment.apiURL, { responseType: 'text' as 'json' })
  }

  updateStorage(odds:string[]):void {
    let oddsItem = JSON.parse(localStorage.getItem('odds')!);
    if (oddsItem) {
      oddsItem = { ...oddsItem, ...odds };
      localStorage.setItem('odds', JSON.stringify(oddsItem));
    } else {
      localStorage.setItem('odds', JSON.stringify(odds));
    }
  }
}
