(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('primeng/button'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define('@eagle/ui-kit', ['exports', '@angular/core', '@angular/common', 'primeng/button', '@angular/router'], factory) :
	(factory((global.eagle = global.eagle || {}, global.eagle['ui-kit'] = {}),global.ng.core,global.ng.common,global.button,global.ng.router));
}(this, (function (exports,core,common,button,router) { 'use strict';

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
var LoginSharedComponent = /** @class */ (function () {
    function LoginSharedComponent() {
    }
    LoginSharedComponent.prototype.ngOnInit = function () {
    };
    return LoginSharedComponent;
}());
LoginSharedComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-login-shared',
                template: "<p>\n  login-shared works!\n</p>\n<a routerLink=\"/login/privacy-policy\" routerLinkActive=\"active\">Privacy policy</a>\n",
                styles: [""]
            },] },
];
LoginSharedComponent.ctorParameters = function () { return []; };
var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    return PrivacyPolicyComponent;
}());
PrivacyPolicyComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-privacy-policy',
                template: "<h1>\n  Privacy policy page works!\n</h1>\n",
                styles: [""]
            },] },
];
PrivacyPolicyComponent.ctorParameters = function () { return []; };
var routes = [{
        path: 'login',
        children: [
            {
                path: '',
                component: LoginSharedComponent,
            },
            {
                path: 'privacy-policy',
                component: PrivacyPolicyComponent
            }
        ]
    }];
var LoginSharedRoutingModule = /** @class */ (function () {
    function LoginSharedRoutingModule() {
    }
    return LoginSharedRoutingModule;
}());
LoginSharedRoutingModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [router.RouterModule.forChild(routes)],
                exports: [router.RouterModule]
            },] },
];
var LoginSharedModule = /** @class */ (function () {
    function LoginSharedModule() {
    }
    return LoginSharedModule;
}());
LoginSharedModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    LoginSharedRoutingModule
                ],
                declarations: [LoginSharedComponent, PrivacyPolicyComponent],
                exports: [LoginSharedComponent, LoginSharedRoutingModule]
            },] },
];

exports.EagleControlModule = EagleControlModule;
exports.LoginSharedModule = LoginSharedModule;
exports.ɵa = EagleControlComponent;
exports.ɵd = PrivacyPolicyComponent;
exports.ɵb = LoginSharedRoutingModule;
exports.ɵc = LoginSharedComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=eagle-ui-kit.umd.js.map
