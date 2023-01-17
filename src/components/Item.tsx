import { Box } from "@mui/material"

export type ItemProps = {
    xpos: number
}

export default function Item(props: ItemProps) {
    const { xpos } = props

    const itemStyles = {
        background: `url("sm-items.png") -${xpos}px -0px`,
        minWidth: 16,
        minHeight: 16,
        width: 16,
        height: 16,
        transform: 'scale(4) translate(37.5%, 37.5%)'
    }

    return <Box component="img" zIndex={-500} position="absolute" style={itemStyles}/>
}