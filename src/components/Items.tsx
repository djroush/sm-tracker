import { Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../redux/state/RootState"
import Draggable from "./Draggable"
import Droppable from "./Droppable"
import Item from "./Item"

export default function Items() {
    const { items } = useSelector((state: RootState) => state)

    const elements = items.map(item => {
        const { id, value } = item
        const xpos = 16 * id
        return (
            <Draggable key={value}><Item id={id} type='item' value={value} state='active' xpos={xpos} /></Draggable>
        )
    })

    return (
        <Droppable type='items'>
            <Stack direction='row' spacing={3}>
                {elements}
            </Stack>
        </Droppable>
    )
}