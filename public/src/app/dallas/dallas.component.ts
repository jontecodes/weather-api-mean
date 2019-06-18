import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  dallas = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getDallas();
  }
  getDallas(){
    let obs = this._http.getWeather();
    obs.subscribe(data => {
      this.dallas = data['main'];
      console.log('Got Chicago Weather', data);
    });
  }
}
