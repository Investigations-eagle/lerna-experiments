import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading = false;
  loginForm: FormGroup;
  loginFormSubmitted: boolean;
  emptyFieldsError = 'Please enter all required fields';
  copyrightYear = 'some date';

  get hasLoginError(): boolean {
    const condition = this.loginFormSubmitted && !this.loginForm.valid;

    return Boolean(condition);
  }

  get loginErrorMessage(): string {
    return this.loginFormSubmitted && !this.loginForm.valid
      ? this.emptyFieldsError
      : 'this.loginResult.reason';
  }

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      organization: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginFormSubmitted = true;

    if (!this.loginForm.valid) {
      return;
    }
    this.isLoading = true;

    this.router.navigate(['apps-list']);
  }

  resetSubmitted() {
    this.loginFormSubmitted = false;
  }
}
