import { Component } from '@angular/core';
import {environment} from '../../environments/environment';

console.log(environment);
@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent {
  appsURL = environment.appsURL;
}
