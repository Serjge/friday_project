import { setAddModAC, setResultMessageAddPackAC } from 'store/actions';

export type AddPackActionsType =
  | ReturnType<typeof setAddModAC>
  | ReturnType<typeof setResultMessageAddPackAC>;
