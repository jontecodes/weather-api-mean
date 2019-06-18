import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  chicago = [];
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getChicago();
  }
  getChicago(){
    let obs = this._httpService.getChicago();
    obs.subscribe(data => {
      this.chicago = data['main'];
      console.log('Got Chicago Weather', data);
    });
  }
}
