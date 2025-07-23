import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Shared } from '../shared';

@Component({
  selector: 'app-react-form-comp',
  standalone: false,
  templateUrl: './react-form-comp.html',
  styleUrl: './react-form-comp.scss'
})
export class ReactFormComp implements OnInit {
  usersList: any = [];

  userInfoForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('',Validators.required),
    email: new FormControl(''),
    gender: new FormControl(''),
  });

  gender = ['female', 'male', 'others'];

  constructor(private sharedService:Shared) {}

  ngOnInit(): void {
    this.userInfoForm.controls.gender.setValue('female');
    // console.log(this.userInfoForm.controls.gender.value);
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
      id:1,
      name:  'name',
      email: 'sne',
      gender: 'male'
    });
  }
  
}
 
