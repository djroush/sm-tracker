import { Box } from "@mui/material"
import { DraggablePortalProps } from "./Draggable"

export default function Entry(props: DraggablePortalProps) {
    const {type, value, state, xpos, ypos} = props  
    
    const imageStyles = {
      background:`url("sm-portals.png") -${xpos}px -${ypos}px`,
      minWidth:64,
      minHeight:64,
      width: 64,
      height: 64,
    }

    return (
        <Box display='flex' paddingX={1} alignItems='center' minWidth={64} minHeight={64} justifyContent='center'>
            <img data-type={type} data-value={value} data-state={state} style={imageStyles}/>
        </Box>
    )
}