import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    @ViewChild('loginForm')
    loginForm!: NgForm;
    ngOnInit() {}
    constructor() {}
    login() {
        console.log(this.loginForm.value);
    }
}
