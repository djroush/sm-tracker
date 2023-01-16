import { AreaState, defaultAreasState } from './AreasState'
import { BossState, defaultBossesState } from './BossesState'
import { ItemState, defaultItemsState } from './ItemsState'
import { defaultPortalState, PortalState } from './PortalState'

export type RootState = {
    areas: AreaState[],
    bosses: BossState[],
    items: ItemState[],
    portals: PortalState[]
}

export const defaultRootState: RootState = {
    areas: [...defaultAreasState ],
    bosses: [...defaultBossesState],
    items: [...defaultItemsState ],
    portals: [...defaultPortalState]
}
