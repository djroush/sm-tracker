export type ItemCountState = {
    found: number,
    seen: number,
    located: number,
    unknown: number,
}


export const defaultItemCountState: ItemCountState = {
    found: 0,
    seen: 0,
    located: 0,
    unknown: 16
}