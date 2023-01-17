export type ItemState = {
    id: number,
    areaId: number,
    value: string,
    state: number
}

export const UNKNOWN = 0
export const MORPH_BALL = 1
export const MORPH_BOMBS = 2
export const VARIA_SUIT = 3
export const GRAVITY_SUIT = 4
export const CHARGE_BEAM = 5
export const ICE_BEAM = 6
export const WAVE_BEAM = 7
export const SPAZER_BEAM = 8
export const PLASMA_BEAM = 9
export const SPEED_BOOSTER = 10
export const HIGH_JUMP = 11
export const SPACE_JUMP = 12
export const SCREW_ATTACK = 13
export const SPRING_BALL = 14
export const GRAPPLE_BEAM = 15
export const XRAY_SCOPE = 16

export const defaultItemsState: ItemState[] = [{
    id: 0,
    areaId: 0,
    value: 'Unknown',
    state: 0
}, {
    id: 1,
    areaId: 0,
    value: 'Morph Ball',
    state: 0
}, {
    id: 2,
    areaId: 0,
    value: 'Morph Bombs',
    state: 0
}, {
    id: 3,
    areaId: 0,
    value: 'Varia Suit',
    state: 0
}, {
    id: 4,
    areaId: 0,
    value: 'Gravity Suit',
    state: 0
}, {
    id: 5,
    areaId: 0,
    value: 'Charge Beam',
    state: 0
}, {
    id: 6,
    areaId: 0,
    value: 'Ice Beam',
    state: 0
}, {
    id: 7,
    areaId: 0,
    value: 'Wave Beam',
    state: 0
}, {
    id: 8,
    areaId: 0,
    value: 'Spazer Beam',
    state: 0
}, {
    id: 9,
    areaId: 0,
    value: 'Plasma Beam',
    state: 0
}, {
    id: 10,
    areaId: 0,
    value: 'Speed Booster',
    state: 0
}, {
    id: 11,
    areaId: 0,
    value: 'High Jump',
    state: 0
}, {
    id: 12,
    areaId: 0,
    value: 'Space Jump',
    state: 0
}, {
    id: 13,
    areaId: 0,
    value: 'Screw Attack',
    state: 0
}, {
    id: 14,
    areaId: 0,
    value: 'Spring Ball',
    state: 0
}, {
    id: 15,
    areaId: 0,
    value: 'Grapple Beam',
    state: 0
}, {
    id: 16,
    areaId: 0,
    value: 'Xray Scope',
    state: 0
}
]
