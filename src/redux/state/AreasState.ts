//TODO: change portals to portalIds????
export const CRATERIA = 1
export const GREEN_BRINSTAR = 2
export const RED_BRINSTAR = 3
export const WEST_MARIDIA = 4
export const UPPER_NORFAIR = 5
export const CROC = 6
export const KRAID = 7
export const WRECKED_SHIP = 8
export const EAST_MARIDIA = 9
export const LOWER_NORFAIR = 10
export const TOURIAN = 11

export type AreaState = {
    id: number,
    bgColor: string,
    value: string,
    bossId?:number
}
export const defaultAreasState: AreaState[] = [
    { id: 0, value: 'Unknown', bgColor: '#000000' },
    { id: 1, value: 'Crateria', bgColor: '#3B4878' },
    { id: 2, value: 'Green Brinstar', bgColor: '#42823D'},
    { id: 3, value: 'Red Brinstar', bgColor: '#963F39' }, 
    { id: 4, value: 'West Maridia', bgColor: '#3C6454' },
    { id: 5, value: 'Upper Norfair', bgColor: '#E27400' },
    { id: 6, value: 'Croc', bgColor: '#F8280F' }, 
    { id: 7, value: 'Kraid', bgColor: '#3F3E24', bossId:1},
    { id: 8, value: 'Wrecked Ship', bgColor: '#90896D', bossId:2},
    { id: 9, value: 'East Maridia', bgColor: '#A77DA3', bossId:3},
    { id: 10, value: 'Lower Norfair', bgColor: '#D68C73', bossId:4},
    { id: 11, value: 'Tourian', bgColor: '#818181'}
]
