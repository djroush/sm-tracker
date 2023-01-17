import { immutableUpdate } from "@/src/util/Arrays";
import { defaultPortalState } from "../state/PortalState";

export const PortalsReducer = (state = defaultPortalState, action: any) => {
  if (action.type === 'PORTALS/persist-portal') {
    return immutableUpdate(state, action.value.id, action.value)
  }
  return state;
};