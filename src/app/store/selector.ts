import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TableState } from './reducer';

// for reading data from store
export const selectTableFeature = createFeatureSelector<TableState>('table');

export const selectTableData = createSelector(
  selectTableFeature,
  (state: TableState) => state.data
);
