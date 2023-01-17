import { Stack } from "@mui/material"
import Draggable from "./Draggable"
import ItemCount from "./ItemCount"

export default function ItemCounts() {
    const itemCounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const elements = itemCounts.map(itemCount => {
        return (
            <Draggable key={itemCount} id={itemCount} type='itemCount' value={itemCount.toString()}>
                <ItemCount value={itemCount} />
            </Draggable>
        )
    })

    return (
        <Stack direction='row' spacing={3}>
            {elements}
        </Stack>
    )
}