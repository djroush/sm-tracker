import { combineReducers } from 'redux'

import { AreasReducer } from "./AreasReducer";
import { BossesReducer } from './BossesReducer';
import { ItemsReducer } from './ItemsReducer';
import { PortalsReducer } from './PortalsReducer';

//TODO: add an item count reducer?
export const RootReducer = combineReducers({
  areas: AreasReducer,
  bosses: BossesReducer,
  items: ItemsReducer,
  portals: PortalsReducer
});