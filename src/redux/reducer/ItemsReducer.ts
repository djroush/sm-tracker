import { immutableUpdate } from "@/src/util/Arrays";
import { defaultItemsState } from "../state/ItemsState";

export const ItemsReducer = (state = defaultItemsState, action: any) => {
  if (action.type === 'ITEMS/persist-item') {
    return immutableUpdate(state, action.event.id, action.event)
  }
  return state;
};