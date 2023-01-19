import { Box, useTheme } from "@mui/material"

export type AreaItemProps = {
    key: string
    xpos: number
}

export default function AreaItem(props: AreaItemProps) {
    const {key, xpos} = props  
    
    const theme = useTheme()
    const bgColor = theme.palette.background.default

    const areaItemStyles = {
        background:`url("sm-items.png") -${xpos}px 0px`,
        minWidth:16,
        minHeight:16,
        width: 16,
        height: 16,
        transform: 'scale(2)',
      }
  
    return (
        <Box key={key} display='flex' flexBasis='content' alignItems='center' minWidth={32} minHeight={32} justifyContent='center' bgcolor={bgColor} >
            <img style={areaItemStyles}/>
        </Box>
    )
}