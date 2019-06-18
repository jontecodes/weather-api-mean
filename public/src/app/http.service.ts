import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getWeather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dallas&APPID=9c4d74fb44c95d51a9b50b8fa21ca4a4');
  }
  getChicago(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=9c4d74fb44c95d51a9b50b8fa21ca4a4')
  }
  getSanJose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=san%20jose&APPID=9c4d74fb44c95d51a9b50b8fa21ca4a4')
  }
  getBurbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=burbank&APPID=9c4d74fb44c95d51a9b50b8fa21ca4a4')
  }
}
