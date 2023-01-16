import { combineReducers } from 'redux'

import { AreasReducer } from "./AreasReducer";
import { BossesReducer } from './BossesReducer';
import { ItemsReducer } from './ItemsReducer';
import { PortalsReducer } from './PortalsReducer';

export const RootReducer = combineReducers({
  areas: AreasReducer,
  bosses: BossesReducer,
  items: ItemsReducer,
  portals: PortalsReducer
});