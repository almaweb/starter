import { HeaderPage } from '@app/aw-app/aw.models';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { AppState } from '@app/core';

export const FEATURE_AW_NAME = 'awApplication';
// export const selectAwApplication = createFeatureSelector<State, AwState>(
//   FEATURE_AW_NAME
// );

//   export const reducers: ActionReducerMap<AwState> = {};

//   export interface AwState {}

//   export interface State extends AppState {
//     awApplication: AwState;
//   }
