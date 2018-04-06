import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

var EagleControlComponent = /** @class */ (function () {
    function EagleControlComponent() {
    }
    return EagleControlComponent;
}());
EagleControlComponent.decorators = [
    { type: Component, args: [{
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
var LoginSharedComponent = /** @class */ (function () {
    function LoginSharedComponent() {
    }
    LoginSharedComponent.prototype.ngOnInit = function () {
    };
    return LoginSharedComponent;
}());
LoginSharedComponent.decorators = [
    { type: Component, args: [{
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            },] },
];
var LoginSharedModule = /** @class */ (function () {
    function LoginSharedModule() {
    }
    return LoginSharedModule;
}());
LoginSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    LoginSharedRoutingModule
                ],
                declarations: [LoginSharedComponent, PrivacyPolicyComponent],
                exports: [LoginSharedComponent, LoginSharedRoutingModule]
            },] },
];

export { EagleControlModule, LoginSharedModule, EagleControlComponent as ɵa, PrivacyPolicyComponent as ɵd, LoginSharedRoutingModule as ɵb, LoginSharedComponent as ɵc };
//# sourceMappingURL=eagle-ui-kit.js.map
