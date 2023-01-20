import { immutableUpdate } from "@/src/util/Arrays";
import { defaultPortalState } from "../state/PortalState";

export const PortalsReducer = (state = defaultPortalState, action: any) => {
  if (action.type === 'PORTALS/persist-portal') {
    return immutableUpdate(state, action.event.id, action.event)
  }
  return state;
};