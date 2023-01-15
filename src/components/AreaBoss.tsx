import {  Box } from "@mui/material"
import  { DraggableProps } from "./Draggable"


export default function AreaBoss(props: DraggableProps) {
    const { type, value, state, xpos } = props

    const bossStyles = {
        background: `url("sm-bosses.png") -${xpos}px 0px`,
        minWidth: 16,
        minHeight: 16,
        width: 16,
        height: 16,
        transform: 'scale(4)'
    }

    return (
        <Box display='flex' padding={1.5} alignItems='center' minWidth={64} minHeight={64} justifyContent='center'>
            <img data-type={type} data-value={value} data-state={state} style={bossStyles} />
        </Box>
    )
}