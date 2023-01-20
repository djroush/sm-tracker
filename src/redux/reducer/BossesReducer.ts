import { immutableUpdate } from "@/src/util/Arrays";
import { defaultBossesState } from "../state/BossesState";

export const BossesReducer = (state = defaultBossesState, action: any) => {
  if (action.type === 'BOSSES/persist-boss') {
    return immutableUpdate(state, action.event.id, action.event)
  }
  return state;
};