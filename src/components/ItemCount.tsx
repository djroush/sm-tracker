import { Box, Typography, useTheme } from "@mui/material"

export type ItemCountProps = {
    value: string
}

export default function ItemCount(props: ItemCountProps) {
    const { value } = props
    const theme = useTheme()
    const color = theme.palette.text.primary
    const border = `2px solid ${color}`

    return (
        <Box display='flex' border={border} alignItems='center' justifyContent='center'  
            minHeight={64} minWidth={64} width={64} height={64}>
            <Typography data-type='itemCount' fontSize={40} color={color} data-value={value} data-state='active' >{value}</Typography>
        </Box>
    )
}