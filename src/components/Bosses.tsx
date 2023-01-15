import { Stack } from "@mui/material"
import Boss from "./Boss"
import Draggable from "./Draggable"
import Droppable from "./Droppable"

export default function Bosses() {
    const bosses = ['kraid', 'phantoon', 'draygon', 'ridley']

    const elements = bosses.map((value, index) => (
        <Draggable key={value}><Boss type='boss' value={value} state='active' xpos={16*index}/></Draggable>
    ))

    return (
        <Droppable type='bosses'>
            <Stack direction='row' spacing={2}>
                {elements}
            </Stack>
        </Droppable>
    )
}