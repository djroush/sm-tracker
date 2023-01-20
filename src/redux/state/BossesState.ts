export const KRAID = 1
export const PHANTOON = 2
export const DRAYGON = 3
export const RIDLEY = 4

export type BossState = {
    id: number,
    value: string,
    state: number
}

export const defaultBossesState: BossState[] = [{
    id: 0,
    value: 'Unknown',
    state: 0
}, {
    id: 1,
    value: 'Kraid',
    state: 1
}, {
    id: 2,
    value: 'Phantoon',
    state: 1
}, {
    id: 3,
    value: 'Draygon',
    state: 1
}, {
    id: 4,
    value: 'Ridley',
    state: 1
}]

