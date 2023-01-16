import { Box } from "@mui/material"
import { DraggableProps } from "./Draggable"

export default function Item(props: DraggableProps) {
    const {type, value, state, xpos} = props  
    
    const itemStyles = {
      background:`url("sm-items.png") -${xpos}px -0px`,
      minWidth:16,
      minHeight:16,
      width: 16,
      height: 16,
      transform: 'scale(4)'
    }

    return (
        <Box display='flex' alignItems='center' justifyContent='center'>
            <img data-type={type} data-value={value} data-state={state} style={itemStyles}/>
        </Box>
    )
}