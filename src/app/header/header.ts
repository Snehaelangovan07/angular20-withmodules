import { Component } from '@angular/core';
import { Shared } from '../formComp/main-form/shared';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
  // providers:[Shared]
})
export class Header {
  
  constructor(private sharedService: Shared) {}

  showAlert() {
     this.sharedService.customAlert();
  }
}
