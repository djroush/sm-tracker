export const UNKNOWN = 0
export const KRAID = 1 
export const PHANTOON = 2
export const DRAYGON = 3
export const RIDLEY = 4

const bosses = ['Unknown', 'Kraid', 'Phantoon', 'Draygon', 'Ridley']

export type BossLocation = {
    id: number,
    value: string,
    xpos: number
}

export const bossMap: BossLocation[] = bosses.map((value, index) => {
    return { id: index, value, xpos: 16*index }
})

