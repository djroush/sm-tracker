import {  Box, useTheme } from "@mui/material"

export type AreaBossProps = {
    xpos: number,
    ypos: number,
    outlineColor: string
}


export default function AreaBoss(props: AreaBossProps) {
    const { xpos, ypos, outlineColor } = props

    const theme = useTheme()
    const bgColor = theme.palette.background.default
    const border = '1px solid ' + outlineColor
    const bossStyles = {
        background: `url("sm-bosses.png") -${xpos}px -${ypos}px`,
        bgcolor: bgColor,
        minWidth: 16,
        minHeight: 16,
        width: 16,
        height: 16,
        transform: 'scale(4)',
        border: border,
    }

    return (
        
        <Box display='flex' position='relative' alignItems='center' marginLeft={1} marginTop={1} width={64} height={64} justifyContent='center'>
           <Box component="img" position='absolute' zIndex={-1001} style={bossStyles}/>
        </Box>
    )
}