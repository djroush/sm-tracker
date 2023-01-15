import { Stack } from "@mui/material"
import { itemMap } from "../models/Item"
import Draggable from "./Draggable"
import Droppable from "./Droppable"
import Item from "./Item"

export default function Items() {
    const elements = itemMap.map(itemLoc => {
        const { value, xpos } = itemLoc
        return (
            <Draggable key={value}><Item type='item' value={value} state='active' xpos={xpos} /></Draggable>
        )
    })

    return (
        <Droppable type='items'>
            <Stack direction='row' spacing={2}>
                {elements}
            </Stack>
        </Droppable>
    )
}