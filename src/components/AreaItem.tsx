import { Box } from "@mui/material"
import { DraggableProps } from "./Draggable"


export default function AreaItem(props: DraggableProps) {
    const {type, value, state, xpos} = props  
    
    const areaItemStyles = {
        background:`url("sm-items.png") -${xpos}px -16px`,
        minWidth:16,
        minHeight:16,
        width: 16,
        height: 16,
        transform: 'scale(2)'
      }
  
    return (
        <Box display='flex' padding={1} alignItems='center' minWidth={32} minHeight={32} justifyContent='center'>
            <img data-type={type} data-value={value} data-state={state} style={areaItemStyles}/>
        </Box>
    )
}