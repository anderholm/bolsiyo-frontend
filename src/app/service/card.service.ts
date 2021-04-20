import { Injectable } from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CardService {
  rootURL:string = 'https://pixabay.com/api/'

  constructor(private http:HttpClient){}

  getCardInfo(){
  const httpParams = new HttpParams({
    fromObject:{
      key: '13119377-fc7e10c6305a7de49da6ecb25'
    }
  })

  return this.http.get(this.rootURL,{params:httpParams})

}

}
