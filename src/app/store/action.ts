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

