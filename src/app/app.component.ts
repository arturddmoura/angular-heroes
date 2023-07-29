import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  constructor(public loginDialog: MatDialog) {}

  openLoginDialog() {
    this.loginDialog.open(LoginDialogComponent, {
      data: { username: 'arturddmoura', password: '12345' },
    });
  }
}
