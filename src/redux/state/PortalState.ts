export type PortalState = {
    id: number,
    areaId: number,
    entrance: string
    entranceColor: string
    exit: string|null
    exitColor: string|null
}

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

export const defaultPortalState: PortalState[] = [{
    id: 0,
    areaId: 0,
    entrance: 'Unknown',
    entranceColor: '#000000',
    exit: null,
    exitColor: null
},{
    id: 1,
    areaId: 1,
    entrance: 'Kago',
    entranceColor: '#3B4878',
    exit: null,
    exitColor: null
}, {
    id: 2,
    areaId: 1,
    entrance: 'G4',
    entranceColor: '#3B4878',
    exit: null,
    exitColor: null
}, {
    id: 3,
    areaId: 1,
    entrance: 'Crab',
    entranceColor: '#3B4878',
    exit: null,
    exitColor: null
}, {
    id: 4,
    areaId: 1,
    entrance: 'Moat',
    entranceColor: '#3B4878',
    exit: null,
    exitColor: null
}, {
    id: 5,
    areaId: 1,
    entrance: 'Retro PBs',
    entranceColor: '#3B4878',
    exit: null,
    exitColor: null
}, {
    id: 6,
    areaId: 2,
    entrance: 'West Elev',
    entranceColor: '#42823D',
    exit: null,
    exitColor: null
}, {
    id: 7,
    areaId: 2,
    entrance: 'Green Hills',
    entranceColor: '#42823D',
    exit: null,
    exitColor: null
}, {
    id: 8,
    areaId: 2,
    entrance: 'Noob Bridge',
    entranceColor: '#42823D',
    exit: null,
    exitColor: null
}, {
    id: 9,
    areaId: 3,
    entrance: 'Top Elev',
    entranceColor: '#963F39',
    exit: null,
    exitColor: null
}, {
    id: 10,
    areaId: 3,
    entrance: 'Top Tunnel',
    entranceColor: '#963F39',
    exit: null,
    exitColor: null
}, {
    id: 11,
    areaId: 3,
    entrance: 'Mid Tower',
    entranceColor: '#963F39',
    exit: null,
    exitColor: null
}, {
    id: 12,
    areaId: 3,
    entrance: 'Tube',
    entranceColor: '#963F39',
    exit: null,
    exitColor: null
}, {
    id: 13,
    areaId: 3,
    entrance: 'Bottom Above',
    entranceColor: '#963F39',
    exit: null,
    exitColor: null
}, {
    id: 14,
    areaId: 3,
    entrance: 'Bottom Below',
    entranceColor: '#963F39',
    exit: null,
    exitColor: null
}, {
    id: 15,
    areaId: 4,
    entrance: 'Red Fish',
    entranceColor: '#3C6454',
    exit: null,
    exitColor: null
}, {
    id: 16,
    areaId: 4,
    entrance: 'Main Street',
    entranceColor: '#3C6454',
    exit: null,
    exitColor: null
}, {
    id: 17,
    areaId: 4,
    entrance: 'Map Station',
    entranceColor: '#3C6454',
    exit: null,
    exitColor: null
}, {
    id: 18,
    areaId: 4,
    entrance: 'Crab Shaft',
    entranceColor: '#3C6454',
    exit: null,
    exitColor: null
}, {
    id: 19,
    areaId: 5,
    entrance: 'Top Left',
    entranceColor: '#E27400',
    exit: null,
    exitColor: null
}, {
    id: 20,
    areaId: 5,
    entrance: 'Top Right',
    entranceColor: '#E27400',
    exit: null,
    exitColor: null
}, {
    id: 21,
    areaId: 5,
    entrance: 'Croc Entry',
    entranceColor: '#E27400',
    exit: null,
    exitColor: null
}, {
    id: 22,
    areaId: 5,
    entrance: 'Lava Dive',
    entranceColor: '#E27400',
    exit: null,
    exitColor: null
}, {
    id: 23,
    areaId: 5,
    entrance: 'Back Door',
    entranceColor: '#E27400',
    exit: null,
    exitColor: null
}, {
    id: 24,
    areaId: 6,
    entrance: 'Croc',
    entranceColor: '#F8280F',
    exit: null,
    exitColor: null
}, {
    id: 25,
    areaId: 7,
    entrance: 'Kraid',
    entranceColor: '#73C403',
    exit: null,
    exitColor: null
}, {
    id: 26,
    areaId: 8,
    entrance: 'West Ocean',
    entranceColor: '#FFD700',
    exit: null,
    exitColor: null
}, {
    id: 27,
    areaId: 8,
    entrance: 'Crab Maze',
    entranceColor: '#FFD700',
    exit: null,
    exitColor: null
}, {
    id: 28,
    areaId: 9,
    entrance: 'Aqueduct',
    entranceColor: '#B076FF',
    exit: null,
    exitColor: null
}, {
    id: 29,
    areaId: 9,
    entrance: 'Highway',
    entranceColor: '#B076FF',
    exit: null,
    exitColor: null
}, {
    id: 30,
    areaId: 10,
    entrance: 'Ridley Mouth',
    entranceColor: '#D68C73',
    exit: null,
    exitColor: null
}, {
    id: 31,
    areaId: 10,
    entrance: 'Escape',
    entranceColor: '#D68C73',
    exit: null,
    exitColor: null
}, {
    id: 32,
    areaId: 11,
    entrance: 'Tourian',
    entranceColor: '#818181',
    exit: null,
    exitColor: null
}]