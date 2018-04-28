import { Component, NgModule } from '@angular/core';
import { EGLogger } from '@eagle/lib-scripts';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EagleControlComponent {
    constructor() {
        const /** @type {?} */ log = EGLogger.getLogger('EagleControlComponent');
        log(this);
    }
}
EagleControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-eagle-control',
                template: `<p class="button-container">
  <span>Shred UI Button tittle 7000</span><br>
  <img class="login-logo" src="./assets/images/download.jpeg" alt="" width="40" height="40">
</p>
`,
                styles: [`.eg-button{border:4px solid green}`]
            },] },
];
/** @nocollapse */
EagleControlComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EagleControlModule {
}
EagleControlModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [EagleControlComponent],
                exports: [EagleControlComponent],
                entryComponents: [EagleControlComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoginComponent {
    /**
     * @param {?} router
     * @param {?} formBuilder
     */
    constructor(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.isLoading = false;
        this.emptyFieldsError = 'Please enter all required fields';
        this.copyrightYear = 'some date';
        this.createLoginForm();
    }
    /**
     * @return {?}
     */
    get hasLoginError() {
        const /** @type {?} */ condition = this.loginFormSubmitted && !this.loginForm.valid;
        return Boolean(condition);
    }
    /**
     * @return {?}
     */
    get loginErrorMessage() {
        return this.loginFormSubmitted && !this.loginForm.valid
            ? this.emptyFieldsError
            : 'this.loginResult.reason';
    }
    /**
     * @return {?}
     */
    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            organization: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.loginFormSubmitted = true;
        if (!this.loginForm.valid) {
            return;
        }
        this.isLoading = true;
        this.router.navigate(['apps-list']);
    }
    /**
     * @return {?}
     */
    resetSubmitted() {
        this.loginFormSubmitted = false;
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-login',
                template: `<div class="login">
  <div class="login-background">
    <video loop muted autoplay class="background-video" preload="auto" poster="./assets/images/login_video_bg.jpg">
      <source src="./assets/video/login_video_bg.mp4" type="video/mp4">
    </video>
  </div>
  <!--<app-eagle-loader [hidden]="!isLoading"></app-eagle-loader>-->
  <div class="login-container">
    <img class="login-logo" src="./assets/images/login_logo.png" alt="">

    <form [formGroup]="loginForm" class="login-form" [ngClass]="{'login-form--submitted': loginFormSubmitted}" (ngSubmit)="onSubmit()" (keydown)="resetSubmitted()" novalidate>
      <label for="organization" class="login-label">organization id</label>
      <input formControlName="organization" type="text" id="organization" class="login-input" data-e2e-id="organization-input"/>

      <label for="username" class="login-label">username</label>
      <input formControlName="username" type="text" id="username" class="login-input" data-e2e-id="username-input" />

      <label for="password" class="login-label">password</label>
      <input formControlName="password" id="password" type="password" class="login-input login-input__password" data-e2e-id="password-input"/>

      <div class="login-error">
        <div *ngIf="hasLoginError" class="login-error-message" data-e2e-id="login-error-message">
          <i class="login-error-message__icon fa fa-exclamation-triangle"></i>
          <span class="login-error-message__text">{{loginErrorMessage}}.</span>
        </div>
      </div>
      <button type="submit" class="login-btn" data-e2e-id="login-button">log in</button>
    </form>

    <div class="login-copyright">
      &#169; eagle investment systems llc.
      <br /> {{copyrightYear}} all rights reserved
      <a href="https://www.eagleinvsys.com/info/privacy.cfm" class="login--highlighted-text">privacy policy</a>
    </div>
  </div>
</div>
`,
                styles: [`.input-height-mixin{height:40px;line-height:40px}.ei-highlight{background:theme-color(gold2F);color:theme-color(whiteF);border-radius:0}.ei-dropdown-item{font-size:.75em;color:theme-color(gold2F);text-transform:uppercase;padding:.875em;margin:0}.white-color{color:#fff}.white-bg{background-color:#fff}.white-border{border:1px solid #fff}.defaultBg-bg-gradient{background-image:#ddd}.goldBrand-color{color:#a29060}.goldBrand-bg{background-color:#a29060}.goldBrand-border{border:1px solid #a29060}.goldLink-color{color:#776737}.goldLink-bg{background-color:#776737}.goldLink-border{border:1px solid #776737}.onyx-color{color:#222}.onyx-bg{background-color:#222}.onyx-border{border:1px solid #222}.slate-color{color:#4b4b4b}.slate-bg{background-color:#4b4b4b}.slate-border{border:1px solid #4b4b4b}.pewter-color{color:#a7a9ac}.pewter-bg{background-color:#a7a9ac}.pewter-border{border:1px solid #a7a9ac}.queryBuilderBg-color{color:#efefef}.queryBuilderBg-bg{background-color:#efefef}.queryBuilderBg-border{border:1px solid #efefef}.scrollbar1-color{color:#cbccce}.scrollbar1-bg{background-color:#cbccce}.scrollbar1-border{border:1px solid #cbccce}.gold1-color{color:#655329}.gold1-bg{background-color:#655329}.gold1-border{border:1px solid #655329}.gold2-color{color:#776737}.gold2-bg{background-color:#776737}.gold2-border{border:1px solid #776737}.gold3-color{color:#907f50}.gold3-bg{background-color:#907f50}.gold3-border{border:1px solid #907f50}.gold4-color{color:#a29060}.gold4-bg{background-color:#a29060}.gold4-border{border:1px solid #a29060}.gold5-color{color:#ad9e77}.gold5-bg{background-color:#ad9e77}.gold5-border{border:1px solid #ad9e77}.gold6-color{color:#c4b082}.gold6-bg{background-color:#c4b082}.gold6-border{border:1px solid #c4b082}.gold1-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#65532a),to(#776737));background-image:linear-gradient(to bottom,#65532a,#776737)}.gold2-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#776737),to(#907f50));background-image:linear-gradient(to bottom,#776737,#907f50)}.gold3-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#8f7d4b),to(#a08f62));background-image:linear-gradient(to bottom,#8f7d4b,#a08f62)}.gold4-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#9a8a5f),to(#ad9e77));background-image:linear-gradient(to bottom,#9a8a5f,#ad9e77)}.gold5-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#ad9e77),to(#c3b082));background-image:linear-gradient(to bottom,#ad9e77,#c3b082)}.gold6-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#d1bd8e),to(#c3b082));background-image:linear-gradient(to top,#d1bd8e,#c3b082)}.gray1-color{color:#222}.gray1-bg{background-color:#222}.gray1-border{border:1px solid #222}.gray2-color{color:#4b4b4b}.gray2-bg{background-color:#4b4b4b}.gray2-border{border:1px solid #4b4b4b}.gray3-color{color:#777}.gray3-bg{background-color:#777}.gray3-border{border:1px solid #777}.gray4-color{color:#a7a9ac}.gray4-bg{background-color:#a7a9ac}.gray4-border{border:1px solid #a7a9ac}.gray5-color{color:#ccc}.gray5-bg{background-color:#ccc}.gray5-border{border:1px solid #ccc}.gray6-color{color:#d5d5d5}.gray6-bg{background-color:#d5d5d5}.gray6-border{border:1px solid #d5d5d5}.gray7-color{color:#dcdcdc}.gray7-bg{background-color:#dcdcdc}.gray7-border{border:1px solid #dcdcdc}.gray8-color{color:#e4e4e4}.gray8-bg{background-color:#e4e4e4}.gray8-border{border:1px solid #e4e4e4}.gray9-color{color:#eee}.gray9-bg{background-color:#eee}.gray9-border{border:1px solid #eee}.gray10-color{color:#f0f0f0}.gray10-bg{background-color:#f0f0f0}.gray10-border{border:1px solid #f0f0f0}.gray11-color{color:#fafafa}.gray11-bg{background-color:#fafafa}.gray11-border{border:1px solid #fafafa}.gray12-color{color:#333}.gray12-bg{background-color:#333}.gray12-border{border:1px solid #333}.gray13-color{color:#bbb}.gray13-bg{background-color:#bbb}.gray13-border{border:1px solid #bbb}.gray14-color{color:#bdbec2}.gray14-bg{background-color:#bdbec2}.gray14-border{border:1px solid #bdbec2}.gray15-color{color:#555}.gray15-bg{background-color:#555}.gray15-border{border:1px solid #555}.gray16-color{color:#757575}.gray16-bg{background-color:#757575}.gray16-border{border:1px solid #757575}.gray17-color{color:#858585}.gray17-bg{background-color:#858585}.gray17-border{border:1px solid #858585}.gray1-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#222),to(#4b4b4b));background-image:linear-gradient(to bottom,#222,#4b4b4b)}.gray2-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#4b4b4b),to(#6c6c6c));background-image:linear-gradient(to bottom,#4b4b4b,#6c6c6c)}.gray3-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#9e9e9e),to(#777));background-image:linear-gradient(to top,#9e9e9e,#777)}.gray4-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#a7a9ac),to(#c1c1c1));background-image:linear-gradient(to bottom,#a7a9ac,#c1c1c1)}.gray5-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#d2d2d2),to(#e7e7e7));background-image:linear-gradient(to bottom,#d2d2d2,#e7e7e7)}.gray6-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#eee),to(#f7f7f7));background-image:linear-gradient(to bottom,#eee,#f7f7f7)}.green1-color{color:#0b4a08}.green1-bg{background-color:#0b4a08}.green1-border{border:1px solid #0b4a08}.green2-color{color:#16731a}.green2-bg{background-color:#16731a}.green2-border{border:1px solid #16731a}.green3-color{color:#27a90e}.green3-bg{background-color:#27a90e}.green3-border{border:1px solid #27a90e}.green4-color{color:#5ed049}.green4-bg{background-color:#5ed049}.green4-border{border:1px solid #5ed049}.green5-color{color:#89ee84}.green5-bg{background-color:#89ee84}.green5-border{border:1px solid #89ee84}.green6-color{color:#c6f8b3}.green6-bg{background-color:#c6f8b3}.green6-border{border:1px solid #c6f8b3}.green1-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#0a4706),to(#061a05));background-image:linear-gradient(to top,#0a4706,#061a05)}.green2-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#197d3a),to(#11570d));background-image:linear-gradient(to top,#197d3a,#11570d)}.green3-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#16b411),to(#0c8d08));background-image:linear-gradient(to top,#16b411,#0c8d08)}.green4-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#6cdf44),to(#4bb716));background-image:linear-gradient(to top,#6cdf44,#4bb716)}.green5-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#8dee6f),to(#58d833));background-image:linear-gradient(to top,#8dee6f,#58d833)}.green6-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#a4ff9f),to(#84ea7f));background-image:linear-gradient(to top,#a4ff9f,#84ea7f)}.red1-color{color:#310202}.red1-bg{background-color:#310202}.red1-border{border:1px solid #310202}.red2-color{color:#6c0606}.red2-bg{background-color:#6c0606}.red2-border{border:1px solid #6c0606}.red3-color{color:#ab0b0b}.red3-bg{background-color:#ab0b0b}.red3-border{border:1px solid #ab0b0b}.red4-color{color:#f22c2c}.red4-bg{background-color:#f22c2c}.red4-border{border:1px solid #f22c2c}.red5-color{color:#f67b6e}.red5-bg{background-color:#f67b6e}.red5-border{border:1px solid #f67b6e}.red6-color{color:#fab7a8}.red6-bg{background-color:#fab7a8}.red6-border{border:1px solid #fab7a8}.red1-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#7b090b),to(#5b0405));background-image:linear-gradient(to top,#7b090b,#5b0405)}.red2-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#a11010),to(#830808));background-image:linear-gradient(to top,#a11010,#830808)}.red3-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#d90b0d),to(#c80506));background-image:linear-gradient(to top,#d90b0d,#c80506)}.red4-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#ff322a),to(#e31c18));background-image:linear-gradient(to top,#ff322a,#e31c18)}.red5-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#ff5749),to(#f73327));background-image:linear-gradient(to top,#ff5749,#f73327)}.red6-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#ff8071),to(#ff6051));background-image:linear-gradient(to top,#ff8071,#ff6051)}.cobalt1-color{color:#081d50}.cobalt1-bg{background-color:#081d50}.cobalt1-border{border:1px solid #081d50}.cobalt2-color{color:#183886}.cobalt2-bg{background-color:#183886}.cobalt2-border{border:1px solid #183886}.cobalt3-color{color:#355abf}.cobalt3-bg{background-color:#355abf}.cobalt3-border{border:1px solid #355abf}.cobalt4-color{color:#6588d8}.cobalt4-bg{background-color:#6588d8}.cobalt4-border{border:1px solid #6588d8}.cobalt5-color{color:#a1b3ea}.cobalt5-bg{background-color:#a1b3ea}.cobalt5-border{border:1px solid #a1b3ea}.cobalt6-color{color:#c4d2f8}.cobalt6-bg{background-color:#c4d2f8}.cobalt6-border{border:1px solid #c4d2f8}.cobalt1-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#030f2c),to(#081c4c));background-image:linear-gradient(to bottom,#030f2c,#081c4c)}.cobalt2-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#1d3570),to(#1843ad));background-image:linear-gradient(to bottom,#1d3570,#1843ad)}.cobalt3-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#2450bf),to(#4068cf));background-image:linear-gradient(to bottom,#2450bf,#4068cf)}.cobalt4-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#4e74d4),to(#688de8));background-image:linear-gradient(to bottom,#4e74d4,#688de8)}.cobalt5-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#7b98e3),to(#9bb1eb));background-image:linear-gradient(to bottom,#7b98e3,#9bb1eb)}.cobalt6-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#acbce3),to(#bacbf5));background-image:linear-gradient(to bottom,#acbce3,#bacbf5)}.aqua1-color{color:#0d5562}.aqua1-bg{background-color:#0d5562}.aqua1-border{border:1px solid #0d5562}.aqua2-color{color:#2b8697}.aqua2-bg{background-color:#2b8697}.aqua2-border{border:1px solid #2b8697}.aqua3-color{color:#72b5c1}.aqua3-bg{background-color:#72b5c1}.aqua3-border{border:1px solid #72b5c1}.aqua4-color{color:#a9d9e2}.aqua4-bg{background-color:#a9d9e2}.aqua4-border{border:1px solid #a9d9e2}.aqua5-color{color:#c4ecf3}.aqua5-bg{background-color:#c4ecf3}.aqua5-border{border:1px solid #c4ecf3}.aqua6-color{color:#e3f6f8}.aqua6-bg{background-color:#e3f6f8}.aqua6-border{border:1px solid #e3f6f8}.aqua1-bg-gradient{background-image:-webkit-gradient(linear,left bottom,left top,from(#0f3b3e),to(#092628));background-image:linear-gradient(to top,#0f3b3e,#092628)}.aqua2-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#0c494c),to(#0d696e));background-image:linear-gradient(to bottom,#0c494c,#0d696e)}.aqua3-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#137378),to(#198e94));background-image:linear-gradient(to bottom,#137378,#198e94)}.aqua4-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#1898a1),to(#2bb3bd));background-image:linear-gradient(to bottom,#1898a1,#2bb3bd)}.aqua5-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#40bec7),to(#69d4db));background-image:linear-gradient(to bottom,#40bec7,#69d4db)}.aqua6-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#7edae0),to(#a6dde0));background-image:linear-gradient(to bottom,#7edae0,#a6dde0)}.purple1-color{color:#20042b}.purple1-bg{background-color:#20042b}.purple1-border{border:1px solid #20042b}.purple2-color{color:#541280}.purple2-bg{background-color:#541280}.purple2-border{border:1px solid #541280}.purple3-color{color:#72399d}.purple3-bg{background-color:#72399d}.purple3-border{border:1px solid #72399d}.purple4-color{color:#ac6dd5}.purple4-bg{background-color:#ac6dd5}.purple4-border{border:1px solid #ac6dd5}.purple5-color{color:#ce9af9}.purple5-bg{background-color:#ce9af9}.purple5-border{border:1px solid #ce9af9}.purple6-color{color:#d9c0f2}.purple6-bg{background-color:#d9c0f2}.purple6-border{border:1px solid #d9c0f2}.purple1-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#2c0638),to(#480c5c));background-image:linear-gradient(to bottom,#2c0638,#480c5c)}.purple2-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#581070),to(#6d1d8a));background-image:linear-gradient(to bottom,#581070,#6d1d8a)}.purple3-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#762594),to(#8a37ad));background-image:linear-gradient(to bottom,#762594,#8a37ad)}.purple4-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#9544b8),to(#ae62cc));background-image:linear-gradient(to bottom,#9544b8,#ae62cc)}.purple5-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#b96fd6),to(#c88ee5));background-image:linear-gradient(to bottom,#b96fd6,#c88ee5)}.purple6-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#d2a0eb),to(#e1baf5));background-image:linear-gradient(to bottom,#d2a0eb,#e1baf5)}.rose1-color{color:#740b48}.rose1-bg{background-color:#740b48}.rose1-border{border:1px solid #740b48}.rose2-color{color:#a03071}.rose2-bg{background-color:#a03071}.rose2-border{border:1px solid #a03071}.rose3-color{color:#c5669f}.rose3-bg{background-color:#c5669f}.rose3-border{border:1px solid #c5669f}.rose4-color{color:#eea5d1}.rose4-bg{background-color:#eea5d1}.rose4-border{border:1px solid #eea5d1}.rose5-color{color:#fbc7e6}.rose5-bg{background-color:#fbc7e6}.rose5-border{border:1px solid #fbc7e6}.rose6-color{color:#fde3f4}.rose6-bg{background-color:#fde3f4}.rose6-border{border:1px solid #fde3f4}.rose1-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#3c0825),to(#62113f));background-image:linear-gradient(to bottom,#3c0825,#62113f)}.rose2-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#6e1847),to(#8c2357));background-image:linear-gradient(to bottom,#6e1847,#8c2357)}.rose3-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#9c2769),to(#b53e81));background-image:linear-gradient(to bottom,#9c2769,#b53e81)}.rose4-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#c94288),to(#e05ca3));background-image:linear-gradient(to bottom,#c94288,#e05ca3)}.rose5-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#e063aa),to(#e084b9));background-image:linear-gradient(to bottom,#e063aa,#e084b9)}.rose6-bg-gradient{background-image:-webkit-gradient(linear,left top,left bottom,from(#eb91c4),to(#f7add7));background-image:linear-gradient(to bottom,#eb91c4,#f7add7)}.orange1-color{color:#d74607}.orange1-bg{background-color:#d74607}.orange1-border{border:1px solid #d74607}.orange2-color{color:#f56d1b}.orange2-bg{background-color:#f56d1b}.orange2-border{border:1px solid #f56d1b}.orange3-color{color:#f5973c}.orange3-bg{background-color:#f5973c}.orange3-border{border:1px solid #f5973c}.orange4-color{color:#fab240}.orange4-bg{background-color:#fab240}.orange4-border{border:1px solid #fab240}.orange5-color{color:#f8c75f}.orange5-bg{background-color:#f8c75f}.orange5-border{border:1px solid #f8c75f}.orange6-color{color:#f9da96}.orange6-bg{background-color:#f9da96}.orange6-border{border:1px solid #f9da96}.beige1-color{color:#ebe5d7}.beige1-bg{background-color:#ebe5d7}.beige1-border{border:1px solid #ebe5d7}.default-box-shadow{outline:0!important;-webkit-box-shadow:none;box-shadow:none}.transparent-bg{background-color:rgba(240,240,240,.5)}.login{width:100%;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:linear-gradient(130deg,silver 0,gray 100%)}.login-background{width:100%;height:100%;position:absolute;overflow:hidden}.login-background .background-video{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.login-logo{margin:15px 0;display:inline-block}.login-container{width:320px;font-size:12px;-webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,.22);box-shadow:0 5px 11px 0 rgba(0,0,0,.22);position:relative}.login-form{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}.login-form--submitted input.ng-invalid{border-color:#ef3b3a!important}.login-btn,.login-copyright,.login-label{text-transform:uppercase}.login-label{color:#9c9da0}.login-input{margin:8px 0 20px;padding:0 15px;-webkit-box-flex:1;-ms-flex:1;flex:1;height:35px;font-size:12px;background-color:rgba(255,255,255,.3);color:#fff;border:1px solid transparent}.login-input__password{outline-style:none}.login-btn{-webkit-box-flex:1;-ms-flex:1;flex:1;background:#776737;font-size:12px;color:#fff;margin:18px 0 35px}.login-copyright{text-align:center;color:#858585;line-height:1.5;font-size:11px}.login--highlighted-text{display:block;line-height:4;color:#776737;font-weight:700;text-transform:uppercase}.login-error{min-height:47px}.login-error-message{color:#ef3b3a;padding:10px;font-size:12px;text-align:left;position:relative;text-transform:uppercase;margin:0 0 15px}.login-error-message__icon{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:inline-block;position:absolute}.login-error-message__text{display:inline-block;padding-left:22px;font-weight:600}`]
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: Router, },
    { type: FormBuilder, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const moduleRoutes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    }
];
const LocalRouterModule = RouterModule.forChild(moduleRoutes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoginModule {
}
LoginModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    LocalRouterModule
                ],
                declarations: [LoginComponent]
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

export { EagleControlModule, LoginModule, EagleControlComponent as ɵa, LoginComponent as ɵd, LocalRouterModule as ɵc, moduleRoutes as ɵb };
//# sourceMappingURL=eagle-lib-components.js.map
