import { immutableUpdate } from "@/src/util/Arrays";
import { defaultAreasState } from "../state/AreasState";

export const AreasReducer = (state = defaultAreasState, action: any) => {
  if (action.type === 'AREAS/persist-area') {
    return immutableUpdate(state, action.value.id, action.value)
  }
  return state;
};