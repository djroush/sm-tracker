import { Box, useTheme } from "@mui/material"

export type AreaItemProps = {
    xpos: number
    ypos: number
}

export default function AreaItem(props: AreaItemProps) {
    const {xpos, ypos} = props
    
    const theme = useTheme()
    const bgColor = theme.palette.background.default

    const areaItemStyles = {
        background:`url("sm-items.png") -${xpos}px -${ypos}px`,
        minWidth:16,
        minHeight:16,
        width: 16,
        height: 16,
        transform: 'scale(2)',
      }
  
      //TODO: add a third box make it position relative,
      // make the background and img position absolute and give background lower zIndex
    return (
        <Box display='flex' flexBasis='content' alignItems='center' minWidth={32} minHeight={32} justifyContent='center' bgcolor={bgColor} >
            <Box component="img" style={areaItemStyles}/>
        </Box>
    )
}