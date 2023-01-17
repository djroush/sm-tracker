export const KRAID = 1
export const PHANTOON = 2
export const DRAYGON = 3
export const RIDLEY = 4

export type BossState = {
    id: number,
    value: string,
    state: string
}

export const defaultBossesState: BossState[] = [{
    id: 0,
    value: 'Unknown',
    state: 'default'
}, {
    id: 1,
    value: 'Kraid',
    state: 'default'
}, {
    id: 2,
    value: 'Phantoon',
    state: 'default'
}, {
    id: 3,
    value: 'Draygon',
    state: 'default'
}, {
    id: 4,
    value: 'Ridley',
    state: 'default'
}]

