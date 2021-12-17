import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FactsResponse } from '../models/catsResponse';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  apiUrl = environment.catsApiUrl;

  constructor(private http: HttpClient) { }

  getFact(){
    return this.http.get<FactsResponse>(this.apiUrl);
  }
}
