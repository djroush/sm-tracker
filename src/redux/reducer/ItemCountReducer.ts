import { defaultItemCountState } from "../state/ItemCountState";

export const ItemCountReducer = (state = defaultItemCountState, action: any) => {
  if (action.type === 'ITEMCOUNT/persist-itemCount') {
    return {...action.event}
  }
  return state;
};