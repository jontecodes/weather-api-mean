import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  sanjose = [];
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getSanJose();
  }

  getSanJose(){
    let obs = this._http.getSanJose();
    obs.subscribe(data => {
      this.sanjose = data['main'];
    })
  }
}
