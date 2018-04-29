import { Component } from '@angular/core';

import { EGLogger } from 'eagle-lib-scripts';

@Component({
  selector: 'app-eagle-control',
  templateUrl: './eagle-control.component.html',
  styleUrls: ['./eagle-control.component.css']
})
export class EagleControlComponent {
  constructor() {
      const log = EGLogger.getLogger('EagleControlComponent');
      log(this);
  }
}
