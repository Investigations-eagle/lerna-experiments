import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class LoginComponent {
    private router;
    private formBuilder;
    isLoading: boolean;
    loginForm: FormGroup;
    loginFormSubmitted: boolean;
    emptyFieldsError: string;
    copyrightYear: string;
    readonly hasLoginError: boolean;
    readonly loginErrorMessage: string;
    constructor(router: Router, formBuilder: FormBuilder);
    createLoginForm(): void;
    onSubmit(): void;
    resetSubmitted(): void;
}
