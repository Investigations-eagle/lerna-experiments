import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagleControlComponent } from './eagle-control.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [EagleControlComponent],
  exports: [EagleControlComponent, ButtonModule],
  entryComponents: [EagleControlComponent]
})
export class EagleControlModule {}
