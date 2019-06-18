import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  chicago = [];
  constructor(private _http: HttpService) { }
  getChicago(){
    let obs = this._http.getChicago();
    obs.subscribe(data => {
      this.chicago = data['main'];
      console.log('Got Chicago Weather', data);
    });
  }

  ngOnInit() {
    this.getChicago();
  }

}
