import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Shared } from '../formComp/main-form/shared';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnDestroy {
  subs!: Subscription;
  constructor(private sharedService: Shared) {}

  getFormData() {
    this.subs = this.sharedService.getValues().subscribe((data) => console.log('data', data));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
    console.log('destroyed');
  }
}
