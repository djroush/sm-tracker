import { Stack } from "@mui/material"
import Draggable from "./Draggable"
import Droppable from "./Droppable"
import ItemCount from "./ItemCount"

export default function ItemCounts() {
   const itemCounts = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    const elements = itemCounts.map(itemCount => {
        return (
            <Draggable key={itemCount}>
                <ItemCount value={itemCount.toString()} />
            </Draggable>
        )
    })

    return (
        <Droppable type='itemCounts'>
            <Stack direction='column' spacing={1} paddingY={2}>
                {elements}
            </Stack>
        </Droppable>
    )
}