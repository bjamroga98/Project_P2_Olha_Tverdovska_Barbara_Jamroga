import { Component } from '@angular/core';
import { Params } from '@angular/router';
import { ShelfsService } from 'src/services/shelfs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private shelfsServise : ShelfsService){}

  ngOnInit(){

  }
}
