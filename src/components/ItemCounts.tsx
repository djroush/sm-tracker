import { Stack } from "@mui/material"
import Draggable from "./Draggable"
import Droppable from "./Droppable"
import ItemCount from "./ItemCount"

export default function ItemCounts() {
   const itemCounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const elements = itemCounts.map(itemCount => {
        return (
            <Draggable key={itemCount}>
                <ItemCount id={itemCount} type="itemCount" value={itemCount.toString()} state="active" xpos={0} />
            </Draggable>
        )
    })

    return (
        <Droppable type='itemCounts'>
            <Stack direction='row' spacing={1}>
                {elements}
            </Stack>
        </Droppable>
    )
}