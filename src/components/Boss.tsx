import { Box } from "@mui/material"

export type BossProps = {
    xpos: number
    ypos: number
}

export default function Boss(props: BossProps) {
    const {xpos, ypos} = props

    const bossStyles = {
        background: `url("sm-bosses.png") -${xpos}px -${ypos}px`,
        minWidth: 16,
        minHeight: 16,
        width: 16,
        height: 16,
        transform: 'scale(4) translate(37.5%, 37.5%)'
    }
    return <Box component="img" position='absolute' zIndex={-1001} style={bossStyles}/>
}