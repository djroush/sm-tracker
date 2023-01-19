import { Typography, useTheme } from "@mui/material"

export type ItemCountProps = {
    value: number
}

export default function ItemCount(props: ItemCountProps) {
    const { value } = props
    const theme = useTheme()
    const color = theme.palette.text.primary

    const border = `2px solid ${color}`

    return (
        <Typography component="span" zIndex={-1000} position='absolute' border={border}
            textAlign='center'fontSize={36} width={64} height={64} fontWeight='bold' color={color} >{value}</Typography>
    )
}