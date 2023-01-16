import {  Box, useTheme } from "@mui/material"
import  { DraggableProps } from "./Draggable"


export default function AreaBoss(props: DraggableProps) {
    const { type, value, state, xpos } = props

    const theme = useTheme()
    const bgColor = theme.palette.background.default

    const bossStyles = {
        background: `url("sm-bosses.png") -${xpos}px 0px`,
        minWidth: 16,
        minHeight: 16,
        width: 16,
        height: 16,
        transform: 'scale(4)'
    }

    return (
        <Box display='flex' alignItems='center' minWidth={64} minHeight={64} justifyContent='center' bgcolor={bgColor}>
            <img data-type={type} data-value={value} data-state={state} style={bossStyles} />
        </Box>
    )
}