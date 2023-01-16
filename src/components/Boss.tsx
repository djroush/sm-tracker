import { Box } from "@mui/material"
import { DraggableProps } from "./Draggable"

export default function Boss(props: DraggableProps) {
    const { type, value, state, xpos} = props

    const bossStyles = {
        background: `url("sm-bosses.png") -${xpos}px 0px`,
        minWidth: 16,
        minHeight: 16,
        width: 16,
        height: 16,
        transform: 'scale(4)',
    }

    return (
        <Box display='flex' alignItems='center' justifyContent='center' bgcolor="black"
            minHeight={64} minWidth={64} width={64} height={64}>
            <img data-type={type} data-value={value} data-state={state} style={bossStyles}/>
        </Box>
    )
}