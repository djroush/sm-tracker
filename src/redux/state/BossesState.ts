export const KRAID = 1
export const PHANTOON = 2
export const DRAYGON = 3
export const RIDLEY = 4

export type BossState = {
    id: number,
    areaId: number,
    value: string,
    state: string
}

export const defaultBossesState: BossState[] = [{
    id: 0,
    areaId: 0,
    value: 'Unknown',
    state: 'default'
}, {
    id: 1,
    areaId: 0,
    value: 'Kraid',
    state: 'default'
}, {
    id: 2,
    areaId: 0,
    value: 'Phantoon',
    state: 'default'
}, {
    id: 3,
    areaId: 0,
    value: 'Draygon',
    state: 'default'
}, {
    id: 4,
    areaId: 0,
    value: 'Ridley',
    state: 'default'
}]

