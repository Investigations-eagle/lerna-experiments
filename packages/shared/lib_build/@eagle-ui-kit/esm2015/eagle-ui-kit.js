import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EagleControlComponent {
}
EagleControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-eagle-control',
                template: `<p class="button-container">
  <span>Button tittle</span><br>
  <p-button label="Click" styleClass="eg-button"></p-button>
</p>
`,
                styles: [`.eg-button{border:4px solid green}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EagleControlModule {
}
EagleControlModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ButtonModule
                ],
                declarations: [EagleControlComponent],
                exports: [EagleControlComponent, ButtonModule],
                entryComponents: [EagleControlComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { EagleControlModule, EagleControlComponent as ɵa };
//# sourceMappingURL=eagle-ui-kit.js.map
