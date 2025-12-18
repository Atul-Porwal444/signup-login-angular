import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // needed for basics
import { FormsModule } from '@angular/forms';
import { LoginModel, UserRegister } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
  loginObj : LoginModel = new LoginModel();
  userServie : UserService = inject(UserService);

  router : Router = inject(Router);

  toggleMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  onRegister() : void {
    this.userServie.registerUser(this.registerObj).subscribe((result:UserRegister) => {
      alert("User Registered Successfully");
    }, error => {
      alert(error.error);
    })
  }

  onLogin() : void {
    this.userServie.onLogin(this.loginObj).subscribe((result:any) => {
      alert("User LoggedIn , navigation to the dashboard");
      localStorage.setItem("logData", JSON.stringify(result.data));
      this.router.navigateByUrl("/layout");
    }, error => {
      alert("Wrong credential");
    })
  }

}
