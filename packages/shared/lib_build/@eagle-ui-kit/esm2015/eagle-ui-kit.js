import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

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
  <span>Shred UI Button tittle </span><br>
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
class LoginSharedComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoginSharedComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-login-shared',
                template: `<p>
  login-shared works!
</p>
<a routerLink="/login/privacy-policy" routerLinkActive="active">Privacy policy</a>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
LoginSharedComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PrivacyPolicyComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PrivacyPolicyComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-privacy-policy',
                template: `<h1>
  Privacy policy page works!
</h1>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
PrivacyPolicyComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const routes = [{
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
class LoginSharedRoutingModule {
}
LoginSharedRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoginSharedModule {
}
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

export { EagleControlModule, LoginSharedModule, EagleControlComponent as ɵa, PrivacyPolicyComponent as ɵd, LoginSharedRoutingModule as ɵb, LoginSharedComponent as ɵc };
//# sourceMappingURL=eagle-ui-kit.js.map
