import { Injectable } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { catchError, mergeMap, of } from 'rxjs';
import { Shared } from '../formComp/main-form/shared';
import * as TableActions from './action';

@Injectable({
  providedIn: 'root',
})
// for async operations
export class TableEffects {
  action$ = inject(Actions);
  constructor(private sharedService: Shared) {}

  loadTableData$ = createEffect(() =>
    this.action$.pipe(
      ofType(TableActions.loadTableData),
      mergeMap(() =>
        this.sharedService
          .getAll()
          .pipe(map((data: any) => TableActions.loadTableDataSuccess({ data })),
          catchError(error => of(TableActions.loadTableDataFailure({error}))))
      )
    )
  );

 

}
