import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTableData, editTableData, loadTableData } from '../../../store/action';
import { selectTableData } from '../../../store/selector';
import { Shared } from '../shared';

@Component({
  selector: 'app-react-form-comp',
  standalone: false,
  templateUrl: './react-form-comp.html',
  styleUrl: './react-form-comp.scss',
})
export class ReactFormComp implements OnInit {
  usersList: any = [];
  editingItem: any = null;
  userInfoForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    gender: new FormControl(''),
  });

  gender = ['female', 'male', 'others'];

  store = inject(Store);

  constructor(private sharedService: Shared) {}

  tableData$ = this.store.select(selectTableData); // to get the data after load

  ngOnInit(): void {
    this.userInfoForm.controls.gender.setValue('female');

    this.store.dispatch(loadTableData());
    // this.tableData$.subscribe(data => {
    //   console.log('Table data:', data);
    // });
  }

  addNewUser() {
    if (this.userInfoForm.valid) {
      const formValue = this.userInfoForm.value;

      if (this.editingItem) {
        const updatedData = { ...this.editingItem, ...formValue };
        console.log("updated",updatedData)
        this.store.dispatch(editTableData({ updatedData }));
      } else {
       
        const newData = {
          ...formValue,
          id: Math.floor(Math.random() * 10000).toString()
        };
       
        this.store.dispatch(addTableData({ newData }));
      }

      this.sharedService.setValues(this.userInfoForm.getRawValue());
    }

    this.userInfoForm.reset();
    this.editingItem = null;
  }

  updateUser(item: any) {
    this.editingItem = item;
    this.userInfoForm.patchValue(item);
  }
}
