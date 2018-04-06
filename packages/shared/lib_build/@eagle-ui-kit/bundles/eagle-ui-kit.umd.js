(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('primeng/button')) :
	typeof define === 'function' && define.amd ? define('@eagle/ui-kit', ['exports', '@angular/core', '@angular/common', 'primeng/button'], factory) :
	(factory((global.eagle = global.eagle || {}, global.eagle['ui-kit'] = {}),global.ng.core,global.ng.common,global.button));
}(this, (function (exports,core,common,button) { 'use strict';

var EagleControlComponent = /** @class */ (function () {
    function EagleControlComponent() {
    }
    return EagleControlComponent;
}());
EagleControlComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-eagle-control',
                template: "<p class=\"button-container\">\n  <span>Shred UI Button tittle </span><br>\n  <p-button label=\"Click\" styleClass=\"eg-button\"></p-button>\n</p>\n",
                styles: [".eg-button{border:4px solid green}"]
            },] },
];
var EagleControlModule = /** @class */ (function () {
    function EagleControlModule() {
    }
    return EagleControlModule;
}());
EagleControlModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    button.ButtonModule
                ],
                declarations: [EagleControlComponent],
                exports: [EagleControlComponent, button.ButtonModule],
                entryComponents: [EagleControlComponent]
            },] },
];

exports.EagleControlModule = EagleControlModule;
exports.ɵa = EagleControlComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=eagle-ui-kit.umd.js.map
