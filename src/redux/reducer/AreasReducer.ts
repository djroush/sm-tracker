import { immutableUpdate } from "@/src/util/Arrays";
import { defaultAreasState } from "../state/AreasState";

export const AreasReducer = (state = defaultAreasState, action: any) => {
  if (action.type === 'AREAS/persist-area') {
    return immutableUpdate(state, action.event.id, action.event)
  }
  return state;
};