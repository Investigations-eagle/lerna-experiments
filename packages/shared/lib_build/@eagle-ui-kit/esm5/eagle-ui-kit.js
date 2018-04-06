import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

var EagleControlComponent = /** @class */ (function () {
    function EagleControlComponent() {
    }
    return EagleControlComponent;
}());
EagleControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-eagle-control',
                template: "<p class=\"button-container\">\n  <span>Button tittle</span><br>\n  <p-button label=\"Click\" styleClass=\"eg-button\"></p-button>\n</p>\n",
                styles: [".eg-button{border:4px solid green}"]
            },] },
];
var EagleControlModule = /** @class */ (function () {
    function EagleControlModule() {
    }
    return EagleControlModule;
}());
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

export { EagleControlModule, EagleControlComponent as ɵa };
//# sourceMappingURL=eagle-ui-kit.js.map
