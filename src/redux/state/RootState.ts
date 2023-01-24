import { AreaState, defaultAreasState } from './AreasState'
import { BossState, defaultBossesState } from './BossesState'
import { defaultItemCountState, ItemCountState } from './ItemCountState'
import { ItemState, defaultItemsState } from './ItemsState'
import { defaultPortalState, PortalState } from './PortalState'

export type RootState = {
    areas: AreaState[],
    bosses: BossState[],
    items: ItemState[],
    itemCount: ItemCountState,
    portals: PortalState[]
}

export const defaultRootState: RootState = {
    areas: [...defaultAreasState ],
    bosses: [...defaultBossesState],
    items: [...defaultItemsState ],
    itemCount: {...defaultItemCountState},
    portals: [...defaultPortalState]
}
