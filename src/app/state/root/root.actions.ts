import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {SnapshotModel} from "../../../model/snapshot.model";
import {AddedColumnModel} from "../../../model/added-column.model";

export const DateActions = createActionGroup({
  source: 'Date',
  events: {
    'Set Start Date': props<{ date: string }>(),
    'Set End Date': props<{ date: string }>(),
  }
});

export const StartSnapshotActions = createActionGroup({
  source: 'Snapshot',
  events: {
    'Load Success': props<{snapshot: SnapshotModel | null}>(),
    'Load Error': emptyProps(),
  }
})

export const EndSnapshotActions = createActionGroup({
  source: 'End Snapshot',
  events: {
    'Load Success': props<{snapshot: SnapshotModel | null}>(),
    'Load Error': emptyProps(),
  }
})

export const DiffActions = createActionGroup({
  source: 'Generate Diff',
  events: {
    'Request diff': emptyProps(),
    'Load Success': props<{addedCols: AddedColumnModel[]}>(),
    'Load Error': emptyProps(),
  }
})

