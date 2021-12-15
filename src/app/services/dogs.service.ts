import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BreedsResponse } from '../models/dogsResponse';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  private apiUrlBase = environment.dogApiUrlBase;
  private apiUrlExtension = environment.dogApiUrlExtension;
  private apiUrlAllBreeds = environment.dogApiUrlAllBreeds;

  public getAllBreeds(){
    return this.http.get<BreedsResponse>(`${this.apiUrlBase}${this.apiUrlAllBreeds}`);
  }

  public getDogsByBreed(breed: string){
    return this.http.get(`${this.apiUrlBase}breed/${breed}${this.apiUrlExtension}`);
  }
}
