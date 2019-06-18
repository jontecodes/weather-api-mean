import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  burbank = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getBurbank();
  }
  getBurbank(){
    let obs = this._http.getBurbank();
    obs.subscribe(data => {
      this.burbank = data['main'];
    })
  }

}
