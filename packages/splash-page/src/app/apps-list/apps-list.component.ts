import { Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {
  appsConfig = config;

  constructor() {}

  ngOnInit() {}
}
