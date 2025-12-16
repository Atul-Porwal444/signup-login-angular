import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // needed for basics
import { FormsModule } from '@angular/forms';
import { UserRegister } from '../../models/user.model';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginMode = true;
  passwordVisible = false;

  registerObj : UserRegister = new UserRegister();

  toggleMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

}
