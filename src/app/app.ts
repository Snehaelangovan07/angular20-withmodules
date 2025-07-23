import { Component, signal } from '@angular/core';
import { Shared } from './formComp/main-form/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-routes');
}