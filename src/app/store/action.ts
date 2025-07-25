import { createAction, props } from '@ngrx/store';
import { tableData } from './model';

//  define what should happen
export const loadTableData = createAction('[Table] Invoke Load API');

export const loadTableDataSuccess = createAction(
  '[Table] Load Table Data Success',
  props<{ data: tableData[] }>()
);

export const loadTableDataFailure = createAction(
  '[Table] Load Data Failure',
  props<{ error: any }>()
);

export const addTableData = createAction(
  '[Table] Add Data',
  props<{ newData: any }>()
);

export const addTableDataSuccess = createAction(
  '[Table] Add Data Success',
  props<{ newData: any }>()
);

export const addTableDataFailure = createAction(
  '[Table] Add Data Failure',
  props<{ error: any }>()
);

export const editTableData = createAction(
  '[Table] Edit Data',
  props<{ updatedData: any }>()
);

export const editTableDataSuccess = createAction(
  '[Table] Edit Data Success',
  props<{ updatedData: any }>()
);

export const editTableDataFailure = createAction(
  '[Table] Edit Data Failure',
  props<{ error: any }>()
);
