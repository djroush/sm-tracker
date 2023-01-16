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

export type PortalState = {
    id: number,
    areaId: number,
    entrance: string
    //for exit store id or name ?
    exit: string | null
}

export const defaultPortalState: PortalState[] = [{
    id: 1,
    areaId: 1,
    entrance: 'Kago',
    exit: null
}, {
    id: 2,
    areaId: 1,
    entrance: 'G4',
    exit: null
}, {
    id: 3,
    areaId: 1,
    entrance: 'Crab',
    exit: null
}, {
    id: 4,
    areaId: 1,
    entrance: 'Moat',
    exit: null
}, {
    id: 5,
    areaId: 1,
    entrance: 'Retro PBs',
    exit: null
}, {
    id: 6,
    areaId: 2,
    entrance: 'West Elev',
    exit: null,
}, {
    id: 7,
    areaId: 2,
    entrance: 'Green Hills',
    exit: null,
}, {
    id: 8,
    areaId: 2,
    entrance: 'Noob Bridge',
    exit: null,
}, {
    id: 9,
    areaId: 3,
    entrance: 'Top Elev',
    exit: null
}, {
    id: 10,
    areaId: 3,
    entrance: 'Top Tunnel',
    exit: null
}, {
    id: 11,
    areaId: 3,
    entrance: 'Mid Tower',
    exit: null
}, {
    id: 12,
    areaId: 3,
    entrance: 'Tube',
    exit: null
}, {
    id: 13,
    areaId: 3,
    entrance: 'Bottom Above',
    exit: null
}, {
    id: 14,
    areaId: 3,
    entrance: 'Bottom Below',
    exit: null
}, {
    id: 15,
    areaId: 4,
    entrance: 'Red Fish',
    exit: null
}, {
    id: 16,
    areaId: 4,
    entrance: 'Main Street',
    exit: null
}, {
    id: 17,
    areaId: 4,
    entrance: 'Map Station',
    exit: null
}, {
    id: 18,
    areaId: 4,
    entrance: 'Crab Shaft',
    exit: null
}, {
    id: 19,
    areaId: 5,
    entrance: 'Top Left',
    exit: null
}, {
    id: 20,
    areaId: 5,
    entrance: 'Top Right',
    exit: null
}, {
    id: 21,
    areaId: 5,
    entrance: 'Croc Entry',
    exit: null
}, {
    id: 22,
    areaId: 5,
    entrance: 'Lava Dive',
    exit: null
}, {
    id: 23,
    areaId: 5,
    entrance: 'Back Door',
    exit: null
}, {
    id: 24,
    areaId: 6,
    entrance: 'Croc',
    exit: null
}, {
    id: 25,
    areaId: 7,
    entrance: 'Kraid',
    exit: null
}, {
    id: 26,
    areaId: 8,
    entrance: 'West Ocean',
    exit: null
}, {
    id: 27,
    areaId: 8,
    entrance: 'Crab Maze',
    exit: null
}, {
    id: 28,
    areaId: 9,
    entrance: 'Aqueduct',
    exit: null
}, {
    id: 29,
    areaId: 9,
    entrance: 'Highway',
    exit: null
}, {
    id: 30,
    areaId: 10,
    entrance: 'Ridley Mouth',
    exit: null
}, {
    id: 31,
    areaId: 10,
    entrance: 'Escape',
    exit: null
}, {
    id: 32,
    areaId: 11,
    entrance: 'Tourian',
    exit: null
}]