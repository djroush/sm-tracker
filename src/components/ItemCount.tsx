import { Box, Typography, useTheme } from "@mui/material"
import { DraggableProps } from "./Draggable"

export default function ItemCount(props: DraggableProps) {
    const { value } = props
    const theme = useTheme()
    const color = theme.palette.text.primary
    
    const border = `2px solid ${color}`

    return (
        <Box display='flex' border={border} alignItems='center' justifyContent='center'
            minHeight={64} minWidth={64} width={64} height={64}>
            <Typography data-type='itemCount' fontSize={36} color={color} data-value={value} data-state='active' >{value}</Typography>
        </Box>
    )
}