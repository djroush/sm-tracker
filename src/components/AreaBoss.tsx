import {  Box, useTheme } from "@mui/material"
import { BossProps } from "./Boss"


export default function AreaBoss(props: BossProps) {
    const { xpos } = props

    const theme = useTheme()
    const bgColor = theme.palette.background.default

    const bossStyles = {
        background: `url("sm-bosses.png") -${xpos}px 0px`,
        minWidth: 16,
        minHeight: 16,
        width: 16,
        height: 16,
        transform: 'scale(4)'
    }

    return (
        <Box display='flex' alignItems='center' width={64} height={64} justifyContent='center' bgcolor={bgColor}>
            <img style={bossStyles} />
        </Box>
    )
}