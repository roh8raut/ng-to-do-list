import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl = 'https://swapi.co/api/planets/';
  constructor(private http: Http) {}

  getData() {
    return this.http.get(this.apiurl).pipe(
      map(res => res.json())
      );
    }
  }

