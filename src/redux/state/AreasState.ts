//TODO: change portals to portalIds????
export const UNKNOWN = 0
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
    itemIds: number[],
    maxItems: number,
    bossId?:number
}
//TODO add max items here 
export const defaultAreasState: AreaState[] = [
    { id: 0, value: 'UNKNOWN', bgColor: '#000000' , itemIds: [], maxItems: 0},
    { id: 1, value: 'CRATERIA', bgColor: '#1C29C3', itemIds: [], maxItems: 17},
    { id: 2, value: 'GRN BRIN', bgColor: '#008800', itemIds: [], maxItems: 16},
    { id: 3, value: 'RED BRIN', bgColor: '#B71A12', itemIds: [], maxItems: 5 }, 
    { id: 4, value: 'WEST MAR', bgColor: '#50C1A5', itemIds: [], maxItems: 7 },
    { id: 5, value: 'UP NORF', bgColor: '#E49B15', itemIds: [], maxItems: 15 },
    { id: 6, value: 'CROC', bgColor: '#F0280F', itemIds: [], maxItems: 5 }, 
    { id: 7, value: 'KRAID', bgColor: '#73C403', itemIds: [], maxItems: 3, bossId:0},
    { id: 8, value: 'SHIP', bgColor: '#D5C907', itemIds: [], maxItems: 11, bossId:0},
    { id: 9, value: 'EAST MAR', bgColor: '#B076FF', itemIds: [], maxItems: 11, bossId:0},
    { id: 10, value: 'LO NORF', bgColor: '#A4682D', itemIds: [], maxItems: 10, bossId:0},
    { id: 11, value: 'TOURIAN', bgColor: '#818181',  itemIds: [], maxItems: 0}
]
