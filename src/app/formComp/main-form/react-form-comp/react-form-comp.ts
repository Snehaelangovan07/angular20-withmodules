import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadTableData } from '../../../store/action';
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

  userInfoForm = new FormGroup({
    id: new FormControl(0),
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
      const inputValues = {
        id: this.userInfoForm.value.id as number,
        name: this.userInfoForm.value.name as any,
        email: this.userInfoForm.value.email as string,
        gender: this.userInfoForm.value.gender as string,
      };
      console.log('set formdata', this.userInfoForm.getRawValue());

      this.sharedService.setValues(this.userInfoForm.getRawValue());
    }

    this.userInfoForm.reset();
  }

  updateUser() {
    this.userInfoForm.patchValue({
      id: 1,
      name: 'name',
      email: 'sne',
      gender: 'male',
    });
  }
}
