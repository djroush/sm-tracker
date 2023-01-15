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

export type ItemLocation = {
    id: number,
    value: string, 
    xpos: number
}

const items = [ 'Morph Ball', 'Morph Bombs', 'Varia Suit', 'Gravity Suit',
    'Charge Beam', 'Ice Beam', 'Wave Beam', 'Spazer Beam', 'Plasma Beam',
    'Speed Booster', 'High Jump Boots', 'Space Jump Boots',
    'Screw Attack', 'Spring Ball', 'Grapple Beam', 'X-ray scope'
]

export const itemMap: ItemLocation[] = items.map((item, index) => {
    return { id: index, value: item, xpos: 16*index }
})