import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Shared {
  private currentValue = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {}

  setValues(val: any) {
    this.currentValue.next(val);
  }

  getValues(): Observable<any> {
    return this.currentValue;
  }
  getAll(): Observable<any> {
    return this.http.get('apiUrl');
  }
  customAlert() {
    alert('alerting is coming');
  }
}
