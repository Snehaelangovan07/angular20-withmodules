import { createReducer, on } from '@ngrx/store';
import * as TableActions from './action';

export interface TableState {
  data: any[];
  loading: boolean;
  error: any;
}

export const initialState: TableState = {
  data: [],
  loading: false,
  error: null
};

// how state changes when actions dispatched
export const tableReducer = createReducer(
  initialState,
  on(TableActions.loadTableData, state => ({ ...state, loading: true })),
  on(TableActions.loadTableDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(TableActions.loadTableDataFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(TableActions.addTableDataSuccess, (state, { newData }) => ({
    ...state,
    data: [...state.data, newData]
  })),
  on(TableActions.editTableDataSuccess, (state, { updatedData }) => ({
    ...state,
    data: state.data.map(item =>
      item.id === updatedData.id ? updatedData : item
    )
  }))
  
  
);
