import { setAddModAC, setResultMessageAddPackAC } from 'store/actions/addPackAction';

export type AddPackActionsType =
  | ReturnType<typeof setAddModAC>
  | ReturnType<typeof setResultMessageAddPackAC>;
