import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tableData } from '../../store/model';

@Injectable({
  providedIn: 'root',
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
    return this.http.get<tableData>('http://localhost:3000/tableData');
  }
  
  addFormData(newData:any) {
    return this.http.post<any>('http://localhost:3000/tableData', newData);
  }

  updateFormData(updatedData: tableData): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/tableData/${updatedData.id}`, updatedData);
  }
  
  customAlert() {
    alert('alerting is coming');
  }
}
