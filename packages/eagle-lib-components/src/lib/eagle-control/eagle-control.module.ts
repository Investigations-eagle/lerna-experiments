import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagleControlComponent } from './eagle-control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EagleControlComponent],
  exports: [EagleControlComponent],
  entryComponents: [EagleControlComponent]
})
export class EagleControlModule {}
