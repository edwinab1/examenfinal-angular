import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from '../interface/dog.interface';

@Injectable({
  providedIn: 'root'
})
export class PeticioneshttpService {

  constructor(private http: HttpClient) { }

  //metodo para realizar una peticion de tipo get

  getData(){

    return this.http.get<Dog>('https://some-random-api.ml/animal/dog');

  }


}
